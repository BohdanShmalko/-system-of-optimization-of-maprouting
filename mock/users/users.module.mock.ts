import { Module } from '@nestjs/common';
import { UsersServiceMock } from './users.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UsersServiceMock],
  exports: [UsersServiceMock],
})
export class UsersMock {}
