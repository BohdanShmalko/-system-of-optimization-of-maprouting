import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from './location-strategy.service';

/**
* Here Strategy Service class
* @name HereStrategyService
* @kind class
*/
@Injectable()
export class HereStrategyService {
  constructor() {}

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
