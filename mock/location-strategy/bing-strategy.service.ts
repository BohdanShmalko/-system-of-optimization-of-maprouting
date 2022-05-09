import { Injectable } from '@nestjs/common';
import { BaseLocationStrategyService } from './base-location-startegy.service';
import { ILocationInput, ILocationsDots } from './location-strategy.service';

/**
* Google Strategy Service class
* @name BingStrategyService
* @kind class
*/
@Injectable()
export class BingStrategyService extends BaseLocationStrategyService {
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
