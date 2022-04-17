import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationsModule {}
