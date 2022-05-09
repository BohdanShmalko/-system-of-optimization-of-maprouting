import { Module } from '@nestjs/common';
import { BingStrategyService } from './bing-strategy.service';
import { OpenRouteStrategyService } from './openroute-strategy.service';
import { LocationStrategyService } from './location-strategy.service';

/**
* Location Strategy module
* @name LocationStrategyModule
* @kind module
*/
@Module({
  imports: [],
  providers: [LocationStrategyService, BingStrategyService, OpenRouteStrategyService],
  exports: [LocationStrategyService, BingStrategyService, OpenRouteStrategyService],
})
export class LocationStrategyModule {}
