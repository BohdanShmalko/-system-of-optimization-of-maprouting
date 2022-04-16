import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsMock {}
