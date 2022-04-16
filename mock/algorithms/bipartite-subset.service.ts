import { Injectable } from '@nestjs/common';
import { ILocationsDots } from '../location-strategy/location-strategy.service';

/**
* Bipartite Subsets Service class
* @name BipartiteSubsetsService
* @kind class
*/
@Injectable()
export class BipartiteSubsetsService {
  constructor() {}

  public async algorithm(data: ILocationsDots[][]): Promise<ILocationsDots[]> {
    // MOCK
    return [
        {
            lat: data[0][0].lat,
            lon: data[0][0].lon,
            step: data[0][0].step,
        },
        {
            lat: data[0][1].lat,
            lon: data[0][1].lon,
            step: data[0][1].step,
        }
    ]
  }
}
