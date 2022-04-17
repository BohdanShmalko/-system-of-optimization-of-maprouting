import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [WebhooksService],
  exports: [WebhooksService],
})
export class WebhooksModule {}
