import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from '../location-strategy/location-strategy.service';
import { BaseAlgorithmsService } from './base-algorithms.service';

/**
* FloydWarshall Algorithm Service class
* @name FloydWarshallService
* @kind class
*/
@Injectable()
export class FloydWarshallService extends BaseAlgorithmsService {
  constructor(
    protected http: HttpService,
  ) { super(http) }

  public async algorithm(data: ILocationInput): Promise<ILocationsDots[]> {
    const { weightMatrix, allCoordinates } = await this.getWeightMatrix(data);
    if(isFinite(weightMatrix[0][weightMatrix.length - 1].distance)){
      return this.getDefaultRes(data);
    }
    weightMatrix.forEach((_, i) => {
      weightMatrix.forEach((_, j) => {
        weightMatrix.forEach((_, k) => {
          const ikDistance = weightMatrix[i][k].distance;
          const kjDistance = weightMatrix[k][j].distance;
          const ijDistance = weightMatrix[i][j].distance;
          if (ikDistance + kjDistance < ijDistance)
            weightMatrix[i][j] = {
              distance: ikDistance + kjDistance,
              longDistance: weightMatrix[i][j].longDistance,
              dots: [...weightMatrix[i][k].dots, ...weightMatrix[k][j].dots.slice(1)],
            };
          });
         });
      });
    return weightMatrix[0][weightMatrix.length - 1].dots.map((index, step) => ({
        lat: allCoordinates[index].lat.toString(), 
        lon: allCoordinates[index].lon.toString(),
        step: step + 1,
      })
    )
  }
}
