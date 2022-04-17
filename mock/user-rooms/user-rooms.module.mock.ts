import { Module } from '@nestjs/common';
import { UserRoomsService } from './user-rooms.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [UserRoomsService],
  exports: [UserRoomsService],
})
export class UserRoomsModule {}
