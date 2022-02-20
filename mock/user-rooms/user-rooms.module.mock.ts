import { Module } from '@nestjs/common';
import { UserRoomsServiceMock } from './user-rooms.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UserRoomsServiceMock],
  exports: [UserRoomsServiceMock],
})
export class UserRoomsMock {}
