import { AlgorithmsModule, CoreModule, LocationStrategyModule } from '@common';
import { LocationsModule, LocationStepsModule, UserHistorysModule, UsersModule } from '@db';
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
    UsersModule,
    CoreModule,
    LocationStrategyModule,
    AlgorithmsModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
