import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationsMock {}
