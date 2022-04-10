import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway, WebSocketServer,
    WsResponse
} from '@nestjs/websockets';
import { WsEnum } from './ws.enum';
import { Socket, Server } from 'socket.io';
import { WsService } from './ws.service';
import { CreateConnectionDto, DeviceErrorDto, JoinRoomDto, UserLocationTimeDto, WsResponseDto, } from '@common';

/**
* Websocket Gateway
* @name WsGateway
* @kind class
*/
@WebSocketGateway(7000, { path: '/ws', serveClient: true, namespace: '/' })
export class WsGateway implements OnGatewayInit{

     /**
     * Websocket server
     * @name wss
     * @kind class
     */
    @WebSocketServer() wss: Server;
    //send to all: wss.emit(pattern, msg)
    //send to room: wss.to(roomName).emit(pattern, msg)
    //join to group: client.join(roomName)
    //leave from group: client.leave(roomName)

    constructor(private readonly wsService: WsService) {
    }

    /**
     * Init websocket server
     * @name afterInit
     * @kind event
     * @property {Object}  server  - websocket server
     */
    afterInit(server: Server): any {
        return this.wsService.afterInit(server);
    }

    /**
     * User connect
     * @name handleConnection
     * @kind event
     * @property {Object}  client  - ws client
     * @property {Object}  message  - data from user
     * @property {Object}  wss  - websocket server
     * @returns {Object} message for user
     */
    @SubscribeMessage(WsEnum.ServerConnect)
    handleConnection(client: Socket, message: CreateConnectionDto){
        return this.wsService.handleConnection(client, message, this.wss);
    }

    /**
     * User disconnect
     * @name handleDisconnect
     * @kind event
     * @property {Object}  client  - ws client
     * @property {Object}  message  - data from user
     * @returns {Object} message for user
     */
     @SubscribeMessage(WsEnum.ServerDisconnect)
     handleDisconnect(client: Socket, message: CreateConnectionDto){
        return this.wsService.handleDisconnect(client, message, this.wss);
    }

    /**
     * Error in on of the user device
     * @name handleErrorDevice
     * @kind event
     * @property {Object}  client  - ws client
     * @property {Object}  message  - data from user
     * @returns {Object} message for user
     */
    @SubscribeMessage(WsEnum.ServerErrorDevice)
    handleErrorDevice(client: Socket, message: DeviceErrorDto){
        return this.wsService.handleErrorDevice(client, message, this.wss);
    }

    /**
    * Update user location for all users in the range
    * @name handleUpdateLocation
    * @kind event
    * @property {Object}  client  - ws client
    * @property {Object}  message  - data from user
    * @returns {Object} message for user
    */
    @SubscribeMessage(WsEnum.ServerUpdateLocation)
    handleUpdateLocation(client: Socket, message: UserLocationTimeDto){
        return this.wsService.handleUpdateLocation(client, message, this.wss);
    }

    /**
    * Create users room
    * @name handleCreateRoom
    * @kind event
    * @property {Object}  client  - ws client
    * @property {Object}  message  - data from user
    * @returns {Object} message for user
    */
     @SubscribeMessage(WsEnum.ServerCreateRoom)
    public async handleCreateRoom(client: Socket, message: CreateConnectionDto){
        return this.wsService.handleCreateRoom(client, message, this.wss);
    }
  
    /**
    * Join for another room
    * @name handleJoinToRoom
    * @kind event
    * @property {Object}  client  - ws client
    * @property {Object}  message  - data from user
    * @returns {Object} message for user
    */
    @SubscribeMessage(WsEnum.ServerJoinRoom)
    public async handleJoinToRoom(client: Socket, message: JoinRoomDto){
        return this.wsService.handleJoinToRoom(client, message, this.wss);
    }

    /**
    * Leave from room
    * @name handleLeaveFromRoom
    * @kind event
    * @property {Object}  client  - ws client
    * @property {Object}  message  - data from user
    * @returns {Object} message for user
    */
    @SubscribeMessage(WsEnum.ServerJoinRoom)
    public async handleLeaveFromRoom(client: Socket, message: JoinRoomDto){
        return this.wsService.handleLeaveFromRoom(client, message, this.wss);
    }
}
