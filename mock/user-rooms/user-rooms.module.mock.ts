import { Module } from '@nestjs/common';
import { UserRoomsService } from './user-rooms.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UserRoomsService],
  exports: [UserRoomsService],
})
export class UserRoomsMock {}
