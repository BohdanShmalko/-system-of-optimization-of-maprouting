import {Injectable, Logger} from '@nestjs/common';
import {WsResponse} from "@nestjs/websockets";
import {Socket, Server} from "socket.io";
import {AuthService} from "@common/index";

@Injectable()
export class WsService {
  constructor(
      private readonly authService: AuthService
  ) {
  }

  private logger: Logger = new Logger('App Gateway');

  public async afterInit(server: Server): Promise<any> {
    this.logger.log('Initialized');
  }

  public async handleConnection(client: Socket, args: any[], wss: Server): Promise<any> {
    //update active users device in place and set to DB
    this.logger.log('Connected');
  }

  public async handleDisconnect(client: Socket, wss: Server): Promise<any> {
    //if device disconnect and have phone - send phone
    this.logger.log('Disconnected');
  }

  public async handleErrorDevice(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //if device not work and have phone - send phone
    return;
  }

  public async handleUpdateLocation(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //update active users device in place and set to DB
    //if have route for user - update route and send user
    return;
  }
  public async handleRouteUser(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //create user room
    //create route
    return;
  }
}
