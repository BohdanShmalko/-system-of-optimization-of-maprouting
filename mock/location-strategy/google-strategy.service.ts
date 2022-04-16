import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from './location-strategy.service';

/**
* Google Strategy Service class
* @name GoogleStrategyService
* @kind class
*/
@Injectable()
export class GoogleStrategyService {
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
