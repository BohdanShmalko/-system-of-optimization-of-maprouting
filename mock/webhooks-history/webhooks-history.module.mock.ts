import { Module } from '@nestjs/common';
import { WebhooksHistoryService } from './webhooks-history.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [WebhooksHistoryService],
  exports: [WebhooksHistoryService],
})
export class WebhooksHistoryModule {}
