import { Module } from '@nestjs/common';
import { LocationStepsServiceMock } from './location-steps.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [LocationStepsServiceMock],
  exports: [LocationStepsServiceMock],
})
export class LocationStepsMock {}
