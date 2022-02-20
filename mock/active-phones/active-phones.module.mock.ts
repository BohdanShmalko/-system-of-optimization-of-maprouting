import { Module } from '@nestjs/common';
import { ActivePhonesServiceMock } from './active-phones.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [ActivePhonesServiceMock],
  exports: [ActivePhonesServiceMock],
})
export class ActivePhonesMock {}
