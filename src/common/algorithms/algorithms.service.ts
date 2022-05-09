import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from '../location-strategy/location-strategy.service';
import { BellmanFordService } from './bellman-ford.service';
import { FloydWarshallService } from './floyd-warshall.service';

/**
* Algorithms Service class
* @name AlgorithmsService
* @kind class
*/
@Injectable()
export class AlgorithmsService {
  constructor(
      private readonly floydWarshallService: FloydWarshallService,
      private readonly bellmanFordService: BellmanFordService,
  ) {}

  public async floydWarshallAlgorithm(data: ILocationInput): Promise<ILocationsDots[]> {
    return this.floydWarshallService.algorithm(data);
  }

  public async bellmanFordAlgorithm(data: ILocationInput): Promise<ILocationsDots[]> {
    return this.bellmanFordService.algorithm(data);
  }
}
