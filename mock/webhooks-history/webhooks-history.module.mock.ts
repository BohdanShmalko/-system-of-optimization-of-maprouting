import { Module } from '@nestjs/common';
import { WebhooksHistoryServiceMock } from './webhooks-history.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [WebhooksHistoryServiceMock],
  exports: [WebhooksHistoryServiceMock],
})
export class WebhooksMock {}
