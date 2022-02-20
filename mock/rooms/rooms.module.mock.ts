import { Module } from '@nestjs/common';
import {  RoomsServiceMock  } from './rooms.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [RoomsServiceMock],
  exports: [RoomsServiceMock],
})
export class RoomsMock {}
