import { Module } from '@nestjs/common';
import { GoogleStrategyService } from './google-strategy.service';
import { HereStrategyService } from './here-strategy.service';
import { LocationStrategyService } from './location-strategy.service';

/**
* Location Strategy module
* @name LocationStrategyModule
* @kind module
*/
@Module({
  imports: [],
  providers: [LocationStrategyService, GoogleStrategyService, HereStrategyService],
  exports: [LocationStrategyService, GoogleStrategyService, HereStrategyService],
})
export class LocationStrategyModule {}
