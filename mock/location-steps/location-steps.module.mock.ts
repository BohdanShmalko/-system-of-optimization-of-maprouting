import { Module } from '@nestjs/common';
import { LocationStepsService } from './location-steps.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [LocationStepsService],
  exports: [LocationStepsService],
})
export class LocationStepsMock {}
