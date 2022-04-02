import { Module } from '@nestjs/common';
import { ClientsServiceMock } from './clients.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [ClientsServiceMock],
  exports: [ClientsServiceMock],
})
export class ClientsMock {}
