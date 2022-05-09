import { Module } from '@nestjs/common';
import { BingStrategyService } from './bing-strategy.service';
import { OpenRouteStrategyService } from './openroute-strategy.service';
import { LocationStrategyService } from './location-strategy.service';
import { HttpModule } from '@nestjs/axios';

/**
* Location Strategy module
* @name LocationStrategyModule
* @kind module
*/
@Module({
  imports: [HttpModule],
  providers: [LocationStrategyService, BingStrategyService, OpenRouteStrategyService],
  exports: [LocationStrategyService, BingStrategyService, OpenRouteStrategyService],
})
export class LocationStrategyModule {}
