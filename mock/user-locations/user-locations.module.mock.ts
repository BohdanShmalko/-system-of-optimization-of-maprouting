import { Module } from '@nestjs/common';
import { UserLocationsServiceMock } from './user-locations.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [UserLocationsServiceMock],
  exports: [UserLocationsServiceMock],
})
export class UserLocationsMock {}
