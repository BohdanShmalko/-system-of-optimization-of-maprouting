import { Module } from '@nestjs/common';
import {  RoomsService  } from './rooms.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsModule {}
