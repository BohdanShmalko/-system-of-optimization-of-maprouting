import { Module } from '@nestjs/common';
import { UsersService } from './users.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersMock {}
