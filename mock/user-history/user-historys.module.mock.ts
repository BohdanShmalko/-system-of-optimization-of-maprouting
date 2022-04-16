import { Module } from '@nestjs/common';
import { UserHistorysService } from './user-historys.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UserHistorysService],
  exports: [UserHistorysService],
})
export class UserHistoryMock {}
