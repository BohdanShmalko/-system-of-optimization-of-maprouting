import { Module } from '@nestjs/common';
import { LocationStepsService } from './location-steps.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [LocationStepsService],
  exports: [LocationStepsService],
})
export class LocationStepsModule {}
