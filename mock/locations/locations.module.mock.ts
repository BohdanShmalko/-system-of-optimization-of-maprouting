import { Module } from '@nestjs/common';
import { LocationsServiceMock } from './locations.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [LocationsServiceMock],
  exports: [LocationsServiceMock],
})
export class LocationsMock {}
