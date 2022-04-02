import { Module } from '@nestjs/common';
import { WebhooksServiceMock } from './webhooks.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [WebhooksServiceMock],
  exports: [WebhooksServiceMock],
})
export class WebhooksMock {}
