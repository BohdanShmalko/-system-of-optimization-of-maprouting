import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [WebhooksService],
  exports: [WebhooksService],
})
export class WebhooksMock {}
