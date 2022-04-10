import { Module } from '@nestjs/common';
import { WebhookController } from './webhooks.controller';
import { WebhookService } from './webhooks.service';
import { WebHooksHistoryModule, WebHooksModule } from '@db'
import { CoreModule } from '@common';

/**
* Webhook module
* @name WebhookModule
* @kind module
*/
@Module({
  imports: [
      WebHooksModule,
      WebHooksHistoryModule,
      CoreModule,
  ],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
