import { Module } from '@nestjs/common';
import { WebhooksHistoryService } from './webhooks-history.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [WebhooksHistoryService],
  exports: [WebhooksHistoryService],
})
export class WebhooksHistoryMock {}
