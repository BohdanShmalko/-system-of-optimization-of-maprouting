import { Module } from '@nestjs/common';
import { UserHistorysService } from './user-historys.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [UserHistorysService],
  exports: [UserHistorysService],
})
export class UserHistoryModule {}
