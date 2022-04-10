/**
* Websocket Enum
* @name WsEnum
* @kind namespace
*/
export enum WsEnum {
    ServerUpdateLocation = 'serverUpdateLocation',
    ServerErrorDevice = 'serverErrorDevice',
    ServerJoinRoom = 'serverJoinRoom',
    ServerLeaveRoom = 'serverLeaveRoom',
    ServerCreateRoom = 'serverCreateRoom',
    ServerDisconnect = 'serverDisconnect',
    ServerConnect = 'serverConnect',

    ClientConnect = 'clientConnect',
    ClientDisconnect = 'clientDisconnect',
    ClientError = 'clientError',
    ClientErrorDevice = 'clientErrorDevice',
    ClientUpdateLocation = 'clientUpdateLocation',
    ClientCreateRoom = 'clientCreateRoom',
}
