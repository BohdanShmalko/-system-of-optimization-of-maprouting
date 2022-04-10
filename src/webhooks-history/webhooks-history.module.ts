import { Module } from '@nestjs/common';
import { WebhookHistoryController } from './webhooks-history.controller';
import { WebhookHistoryService } from './webhooks-history.service';
import { 
  ClientsModule, 
  ErrorsModule, 
  UserHistorysModule, 
  UserRoomsModule, 
  UsersModule, 
  WebHooksHistoryModule, 
  WebHooksModule 
} from '@db'
import { CoreModule } from '@common';
import { HttpModule } from '@nestjs/axios';

/**
* WebhookHistoryModule module
* @name WebhookHistoryModule
* @kind module
*/
@Module({
  imports: [
      WebHooksModule,
      WebHooksHistoryModule,
      CoreModule,
      HttpModule,
      ClientsModule,
      UsersModule,
      UserRoomsModule,
      UserHistorysModule,
      ErrorsModule,
  ],
  controllers: [WebhookHistoryController],
  providers: [WebhookHistoryService],
})
export class WebhookHistoryModule {}
