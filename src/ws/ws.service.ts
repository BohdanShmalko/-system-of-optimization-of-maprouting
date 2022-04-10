import {Injectable, Logger} from '@nestjs/common';
import {WsResponse} from "@nestjs/websockets";
import {Socket, Server} from "socket.io";
import {
  AuthService, 
  CreateConnectionDto, 
  DeviceErrorDto, 
  EWsExceptionMessage, 
  JoinRoomDto, 
  UserLocationTimeDto, 
  WsResponseDto
} from "@common";
import { 
  ErrorsService, 
  RoomsService, 
  UserHistorysService, 
  UserRoomsService, 
  UsersService 
} from '@db';
import { WsEnum } from './ws.enum';

/**
* Websocket service class
* @name WsService
* @kind class
*/
@Injectable()
export class WsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService, 
    private readonly roomsService: RoomsService,
    private readonly userHistorysService: UserHistorysService,
    private readonly userRoomsService: UserRoomsService,
    private readonly userErrorsService: ErrorsService,
  ) {
  }

  private logger: Logger = new Logger('App Gateway');

  /**
  * Init websocket server
  * @name afterInit
  * @kind function
  * @property {Object}  server  - websocket server
  */
  public async afterInit(server: Server): Promise<any> {
    this.logger.log('Initialized');
  }

  /**
  * User connect
  * @name handleConnection
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object[]}  args  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleConnection(client: Socket, message: CreateConnectionDto, wss: Server) {
    const serverEvent = WsEnum.ServerConnect;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    const allRooms = await this.userRoomsService.getAllUsersRoomsByUserId(user._id);
    const roomsId = allRooms.map(({ _id }) => _id.toString());
    for(const room of roomsId) {
      client.join(room);
      wss.to(room).emit(WsEnum.ClientConnect, {  
        hasError: false,
        data: {
          user: user._id, 
          serverEvent,
        }
      })
    }
  }

  /**
  * User disconnect
  * @name handleDisconnect
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object}  wss  - websocket server
  */
  public async handleDisconnect(client: Socket, message: CreateConnectionDto, wss: Server): Promise<any> {
    const serverEvent = WsEnum.ServerDisconnect;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    const allRooms = await this.userRoomsService.getAllUsersRoomsByUserId(user._id);
    const roomsId = allRooms.map(({ _id }) => _id.toString());
    for(const room of roomsId) {
      client.leave(room);
      wss.to(room).emit(WsEnum.ClientDisconnect, {  
        hasError: false,
        data: {
          user: user._id,
          serverEvent,
        }
      });
    }
  }

  /**
  * Error in on of the user device
  * @name handleErrorDevice
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object}  message  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleErrorDevice(client: Socket, message: DeviceErrorDto, wss: Server) {
    const serverEvent = WsEnum.ServerErrorDevice;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    const newError = await this.userErrorsService.create({
      userId: user._id,
      clientId: user.clientId,
      message: message.errorMessage,
    })
    client.emit(WsEnum.ClientErrorDevice, {  
      hasError: false,
      data: {
        newError, 
        serverEvent,
      }
    });
  }

  /**
  * Update user location for all users in the range
  * @name handleUpdateLocation
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object}  message  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleUpdateLocation(client: Socket, message: UserLocationTimeDto, wss: Server) {
    const serverEvent = WsEnum.ServerUpdateLocation;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    await this.userHistorysService.create({
      userId: user._id,
      clientId: user.clientId,
      lat: message.lat,
      lon: message.lon,
      time: message.time,
    })
    const allRooms = await this.userRoomsService.getAllUsersRoomsByUserId(user._id);
    const roomsId = allRooms.map(({ _id }) => _id.toString());
    for(const room of roomsId) {
      wss.to(room).emit(WsEnum.ClientUpdateLocation, {  
        hasError: false,
        data: {
          user: user._id,
          location: {
            lat: message.lat,
            lon: message.lon,
          },
          serverEvent,
        }
      });
    }
  }

  /**
  * Create users room
  * @name handleCreateRoom
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object[]}  args  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
    public async handleCreateRoom(client: Socket, message: CreateConnectionDto, wss: Server) {
      const serverEvent = WsEnum.ServerCreateRoom;
      const { error, user } = await this.userWsGuard(client, message, serverEvent);
      if(error) return;
      const newRoom: any = await this.roomsService.create({ twoUsers: false });
      client.join(newRoom._id);
      client.emit(WsEnum.ClientCreateRoom, {
        hasError: false,
        data: {
          roomId: newRoom._id,
          serverEvent,
        }
      })
    }

  /**
  * Join for another room
  * @name handleJoinToRoom
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object[]}  args  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleJoinToRoom(client: Socket, message: JoinRoomDto, wss: Server) {
    const serverEvent = WsEnum.ServerJoinRoom;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    const room: any = await this.roomsService.findById(message.roomId);
    if(!room) {
      client.emit(WsEnum.ClientError, {
        hasError: true, 
        data: { message: EWsExceptionMessage.RoomNotFound, serverEvent } 
      });
      return;
    }
    await this.userRoomsService.create({
      userId: user._id,
      roomId: room._id,
      clientId: user.clientId,
    })
    wss.to(message.roomId).emit(WsEnum.ClientConnect, {  
      hasError: false,
      data: {
        user: user._id, 
        serverEvent,
      }
    })
  }

  /**
  * Leave from room
  * @name handleLeaveFromRoom
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object[]}  args  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleLeaveFromRoom(client: Socket, message: JoinRoomDto, wss: Server) {
    const serverEvent = WsEnum.ServerJoinRoom;
    const { error, user } = await this.userWsGuard(client, message, serverEvent);
    if(error) return;
    const room: any = await this.roomsService.findById(message.roomId);
    if(!room) {
      client.emit(WsEnum.ClientError, {
        hasError: true, 
        data: { message: EWsExceptionMessage.RoomNotFound, serverEvent } 
      });
      return;
    }
    await this.userRoomsService.deleteByUserIdAndRoomId(
      user._id,
      room._id,
    )
    wss.to(message.roomId).emit(WsEnum.ClientDisconnect, {  
      hasError: false,
      data: {
        user: user._id, 
        serverEvent,
      }
    })
  }

  private async userWsGuard(client, message, serverEvent) {
    const existUser: any = await this.usersService.findByIdAndExternalId(message.userId, message.externalId);
    if(!existUser) {
      client.emit(WsEnum.ClientError, {
        hasError: true, 
        data: { message: EWsExceptionMessage.UserNotFound, serverEvent } 
      });
      return { error: true };
    }
    return { error: false, user: existUser };
  }
}
