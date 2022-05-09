import { Injectable } from '@nestjs/common';
import { BaseLocationStrategyService } from './base-location-startegy.service';
import { ILocationInput, ILocationsDots } from './location-strategy.service';

/**
* Openroute Strategy Service class
* @name OpenRouteStrategyService
* @kind class
*/
@Injectable()
export class OpenRouteStrategyService extends BaseLocationStrategyService {
  constructor() { super() }

  public async strategy(data: ILocationInput): Promise<ILocationsDots[]> {
    // MOCK
    return [
        {
            lat: data.startLat,
            lon: data.startLon,
            step: 1,
        },
        {
            lat: data.endLat,
            lon: data.endLon,
            step: 2,
        }
    ]
  }
}
