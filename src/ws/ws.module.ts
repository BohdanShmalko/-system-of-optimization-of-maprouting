import { Module } from '@nestjs/common';
import { WsService } from './ws.service';
import { WsGateway } from './ws.gateway';

/**
* Websocket module
* @name WsModule
* @kind module
*/
@Module({
    imports: [],
    providers: [WsService, WsGateway],
})
export class WsModule {
}
