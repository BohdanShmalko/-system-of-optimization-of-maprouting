import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from './location-strategy.service';

/**
* Base Location Strategy Service class
* @name BaseLocationStrategyService
* @kind class
*/
@Injectable()
export class BaseLocationStrategyService {
  constructor() {}

  public modes = {};

  protected async strategy(data: ILocationInput): Promise<ILocationsDots[]> {
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
