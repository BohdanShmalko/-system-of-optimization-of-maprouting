import {Injectable, Logger} from '@nestjs/common';
import {WsResponse} from "@nestjs/websockets";
import {Socket, Server} from "socket.io";
import {AuthService} from "@common";

/**
* Websocket service class
* @name WsService
* @kind class
*/
@Injectable()
export class WsService {
  constructor(
      private readonly authService: AuthService
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
  public async handleConnection(client: Socket, args: any[], wss: Server): Promise<any> {
    //update active users device in place and set to DB
    this.logger.log('Connected');
  }

  /**
  * User disconnect
  * @name handleDisconnect
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object}  wss  - websocket server
  */
  public async handleDisconnect(client: Socket, wss: Server): Promise<any> {
    //if device disconnect and have phone - send phone
    this.logger.log('Disconnected');
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
  public async handleErrorDevice(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //if device not work and have phone - send phone
    return;
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
  public async handleUpdateLocation(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //update active users device in place and set to DB
    //if have route for user - update route and send user
    return;
  }

  /**
  * Update user route for two users
  * @name handleRouteUser
  * @kind function
  * @property {Object}  client  - ws client
  * @property {Object}  message  - data from user
  * @property {Object}  wss  - websocket server
  * @returns {Object} message for user
  */
  public async handleRouteUser(client: Socket, message, wss: Server): Promise<WsResponse<string>> {
    //create user room
    //create route
    return;
  }
}
