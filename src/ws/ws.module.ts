import { Module } from '@nestjs/common';
import { WsService } from './ws.service';
import { WsGateway } from './ws.gateway';
import { ErrorsModule, RoomsModule, UserHistorysModule, UserRoomsModule, UsersModule } from '@db';

/**
* Websocket module
* @name WsModule
* @kind module
*/
@Module({
    imports: [
        UsersModule,
        RoomsModule,
        ErrorsModule,
        UserHistorysModule,
        UserRoomsModule,
    ],
    providers: [WsService, WsGateway],
})
export class WsModule {
}
