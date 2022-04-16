import { Injectable } from '@nestjs/common';
import { ILocationsDots } from '../location-strategy/location-strategy.service';
import { BipartiteSubsetsService } from './bipartite-subset.service';

/**
* Algorithms Service class
* @name AlgorithmsService
* @kind class
*/
@Injectable()
export class AlgorithmsService {
  constructor(
      private readonly bipartiteSubsetsService: BipartiteSubsetsService,
  ) {}

  public async bipartiteSubsets(data: ILocationsDots[][]): Promise<ILocationsDots[]> {
    return this.bipartiteSubsetsService.algorithm(data);
  }
}
