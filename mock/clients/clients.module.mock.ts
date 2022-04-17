import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
