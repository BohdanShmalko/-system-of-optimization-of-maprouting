import { CoreModule } from '@common';
import { LocationsModule, LocationStepsModule, UserHistorysModule } from '@db';
import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

/**
* Location module
* @name LocationModule
* @kind module
*/
@Module({
  imports: [
    LocationsModule,
    LocationStepsModule,
    UserHistorysModule,
    CoreModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
