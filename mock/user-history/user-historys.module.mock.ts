import { Module } from '@nestjs/common';
import { UserHistorysServiceMock } from './user-historys.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UserHistorysServiceMock],
  exports: [UserHistorysServiceMock],
})
export class UserLocationsMock {}
