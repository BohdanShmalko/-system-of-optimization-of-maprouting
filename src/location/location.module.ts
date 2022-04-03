import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

/**
* Location module
* @name LocationModule
* @kind module
*/
@Module({
  imports: [],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
