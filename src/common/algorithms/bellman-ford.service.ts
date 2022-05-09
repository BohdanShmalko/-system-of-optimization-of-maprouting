import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from '../location-strategy/location-strategy.service';
import { BaseAlgorithmsService } from './base-algorithms.service';

/**
* BellmanFord Algorithm Service class
* @name BellmanFordService
* @kind class
*/
@Injectable()
export class BellmanFordService extends BaseAlgorithmsService {
  constructor(
    protected http: HttpService,
  ) { super(http) }

  public async algorithm(data: ILocationInput): Promise<ILocationsDots[]> {
    const { weightMatrix, allCoordinates } = await this.getWeightMatrix(data);
    if(isFinite(weightMatrix[0][weightMatrix.length - 1].distance)){
      return this.getDefaultRes(data);
    }
  
    const V = allCoordinates.length;
    const graph = [];
    weightMatrix.forEach((matrix, i) => {
        matrix.forEach((el, j) => {
            if(el => el.distance !== 0 && isFinite(el.distance))
                graph.push([i, j, el.distance]);
        })
    })
    const E = graph.length;
    const src = 0;
    const dis = Array(V).fill(Infinity);

    dis[src] = 0;
    const allDots = weightMatrix.map((_, i) => [i]);

    for (let i = 0; i < V - 1; i++) {
        for (let j = 0; j < E; j++) {
            const fromIndex = graph[j][0];
            const fromDistance = dis[fromIndex];
            const toIndex = graph[j][1];
            const toDistanceOther = graph[j][2];
            const toDistance = dis[toIndex];
            if ((fromDistance + toDistanceOther) < toDistance) {
                dis[toIndex] = dis[fromIndex] + toDistanceOther;
                allDots[toIndex] = [fromIndex, ...allDots[fromIndex]];
            }    
        }
    }
    if(allDots[weightMatrix.length - 1].length < 2) return this.getDefaultRes(data);

    return allDots[weightMatrix.length - 1].map((index, step) => ({
        lat: allCoordinates[index].lat.toString(), 
        lon: allCoordinates[index].lon.toString(),
        step: step + 1,
      })
    )
  }
}
