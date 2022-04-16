import { Module } from '@nestjs/common';
import {  RoomsService  } from './rooms.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsMock {}
