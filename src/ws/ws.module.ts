import { Module } from '@nestjs/common';
import { WsService } from './ws.service';
import { WsGateway } from './ws.gateway';
import { AuthModule } from '@common/index';

@Module({
    imports: [AuthModule],
    providers: [WsService, WsGateway],
})
export class WsModule {
}
