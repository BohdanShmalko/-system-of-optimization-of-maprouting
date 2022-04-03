import { Module } from '@nestjs/common';
import { WebhookController } from './webhooks.controller';
import { WebhookService } from './webhooks.service';
import { WebHooksModule } from '@db'

/**
* Webhook module
* @name WebhookModule
* @kind module
*/
@Module({
  imports: [
      WebHooksModule,
  ],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
