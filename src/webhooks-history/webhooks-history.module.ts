import { Module } from '@nestjs/common';
import { WebhookHistoryController } from './webhooks-history.controller';
import { WebhookHistoryService } from './webhooks-history.service';
import { WebHooksModule } from '@db'

/**
* WebhookHistoryModule module
* @name WebhookHistoryModule
* @kind module
*/
@Module({
  imports: [
      WebHooksModule,
  ],
  controllers: [WebhookHistoryController],
  providers: [WebhookHistoryService],
})
export class WebhookHistoryModule {}
