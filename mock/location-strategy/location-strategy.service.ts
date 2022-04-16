import { EAlgorithms } from '@db';
import { Injectable } from '@nestjs/common';
import { GoogleStrategyService } from './google-strategy.service';
import { HereStrategyService } from './here-strategy.service';

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
      private readonly google: GoogleStrategyService,
      private readonly here: HereStrategyService,
  ) {}

  public readonly apiStrategys = [
      EAlgorithms.Google, 
      EAlgorithms.Here,
    ];

  public async googleStrategy(data: ILocationInput): Promise<ILocationsDots[]> {
        return this.google.strategy(data);
  }

  public async hereStrategy(data: ILocationInput): Promise<ILocationsDots[]> {
    return this.here.strategy(data);
  }
}
