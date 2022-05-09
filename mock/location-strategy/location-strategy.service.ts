import { EAlgorithms } from '@db';
import { Injectable } from '@nestjs/common';
import { BingStrategyService } from './bing-strategy.service';
import { OpenRouteStrategyService } from './openroute-strategy.service';

export interface ILocationsDots {
    lat: string,
    lon: string,
    step: number,
}

export interface ILocationInput {
    startLat: string,
    startLon: string,
    endLat: string,
    endLon: string,
    transport: string,
}

/**
* Location Strategy Service class
* @name LocationStrategyService
* @kind class
*/
@Injectable()
export class LocationStrategyService {
  constructor(
      private readonly bing: BingStrategyService,
      private readonly openroute: OpenRouteStrategyService,
  ) {}

  public async bingStrategy(data: ILocationInput): Promise<ILocationsDots[]> {
        return this.bing.strategy(data);
  }

  public async openrouteStrategy(data: ILocationInput): Promise<ILocationsDots[]> {
    return this.openroute.strategy(data);
  }
}
