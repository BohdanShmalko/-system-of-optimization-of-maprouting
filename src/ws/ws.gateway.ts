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

/**
* Websocket Gateway
* @name WsGateway
* @kind class
*/
@WebSocketGateway(7000, { path: '/ws', serveClient: true, namespace: '/' })
export class WsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

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
     * @property {Object[]}  args  - data from user
     * @returns {Object} message for user
     */
    handleConnection(client: Socket, ...args: any[]): any {
        return this.wsService.handleConnection(client, args, this.wss);
    }

    /**
     * User disconnect
     * @name handleDisconnect
     * @kind event
     * @property {Object}  client  - ws client
     */
    handleDisconnect(client: Socket): any {
        return this.wsService.handleDisconnect(client, this.wss);
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
    handleErrorDevice(client: Socket, message): Promise<WsResponse<string>> {
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
    handleUpdateLocation(client: Socket, message): Promise<WsResponse<string>> {
        return this.wsService.handleUpdateLocation(client, message, this. wss);
    }
}
