import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ILocationInput, ILocationsDots } from '../location-strategy/location-strategy.service';

export type CalculateCoordinatesType = {
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
    allDistance: number,
    circlesNumber: number,
    deltaLat: number,
    deltaLon: number,
    ciclesCoordinates: Array<CoordinatesType>
}

export type CoordinatesType = {
    lat: number,
    lon: number,
}

export type GetWeightMatrixType = {
    allCoordinates: Array<CoordinatesType>,
    weightMatrix: WeightMatrixType,
}

export type WeightMatrixType = Array<Array<{
    distance: number,
    longDistance: number,
    dots: Array<number>,
}>>;

/**
* Base Algorithms Service class
* @name BaseAlgorithmsService
* @kind class
*/
@Injectable()
export class BaseAlgorithmsService {
  constructor(
    protected http: HttpService,
  ) {}

  protected maxDistance = 300;
  protected radius = 11;
  protected proportionKmCoordinate = 110;

  public async algorithm(data: ILocationInput): Promise<ILocationsDots[]> {
    return this.getDefaultRes(data);
  }

  protected getDefaultRes(data: ILocationInput): ILocationsDots[] {
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

  protected calculate(data: ILocationInput): CalculateCoordinatesType {
    const lat1 = Number(data.startLat);
    const lat2 = Number(data.endLat); 
    const lon1 = Number(data.startLon); 
    const lon2 = Number(data.endLon); 
    const allDistance = Math.sqrt(
        ((lat1 - lat2) * this.proportionKmCoordinate) ** 2 +
        ((lon1 - lon2) * this.proportionKmCoordinate) ** 2
    );
    const circlesNumber = Math.ceil(allDistance / this.radius);
    const deltaLat = (lat2 - lat1) / circlesNumber;
    const deltaLon = (lon2 - lon1) / circlesNumber;
    const ciclesCoordinates = [];
    for(let i = 0; i < circlesNumber; i++) {
        const lat = lat1 + i * deltaLat;
        const lon = lon1 + i * deltaLat;
        ciclesCoordinates.push({ lat, lon });
    }
    return {
        lat1,
        lat2,
        lon1,
        lon2,
        allDistance,
        circlesNumber,
        deltaLat,
        deltaLon,
        ciclesCoordinates,
    }
  }

  protected async getApiData(data: CoordinatesType) {
    const result = await this.http.get(``, {
        params: {

        }
    }).toPromise();
    return result.data;
  }

  protected prepareApiData(apiData): Array<CoordinatesType> {
    return;
  }

  protected async getWeightMatrix(data: ILocationInput): Promise<GetWeightMatrixType> {
    const { ciclesCoordinates, lat1, lat2, lon1, lon2 } = this.calculate(data);
    const allCoordinates: Array<CoordinatesType> = [];
    for(const { lat, lon } of ciclesCoordinates) {
        const apiData = await this.getApiData({ lat, lon });
        const data = this.prepareApiData(apiData);
        allCoordinates.push(...data);
    }
    if(!allCoordinates.length) {
        const defWeight = { distance: 0, longDistance: 0, dots: [0, 1] };
        return { 
            allCoordinates: [
                { lat: lat1, lon: lon1 }, 
                { lat: lat2, lon: lon2 },
            ],
            weightMatrix: [
                [{...defWeight}, {...defWeight}],
                [{...defWeight}, {...defWeight}],
            ],
        };
    }
    const firstCoord = allCoordinates[0];
    const lastCoord = allCoordinates[allCoordinates.length - 1];
    if(firstCoord.lat !== lat1 || firstCoord.lon !== lon1) 
        allCoordinates.unshift({ lat: lat1, lon: lon1 });
    if(lastCoord.lat !== lat2 || lastCoord.lon !== lon2) 
        allCoordinates.push({ lat: lat2, lon: lon2 });
    const weightMatrix: WeightMatrixType = [];
    for(let i = 0; i < allCoordinates.length; i++) {
        const lat1 = allCoordinates[i].lat;
        const lon1 = allCoordinates[i].lon;
        weightMatrix[i] = [];
        for(let j = 0; j < allCoordinates.length; j++) {
            const lat2 = allCoordinates[j].lat;
            const lon2 = allCoordinates[j].lon;
            if(lat1 === lat2 && lon1 === lon2) {
                weightMatrix[i][j] = {
                    distance: 0,
                    longDistance: 0,
                    dots: [i,j],
                };
                continue;
            }
            const difLat = lat2 - lat1;
            const difLon = lat2 - lat1;
            const distance = Math.sqrt(
                (difLat * this.proportionKmCoordinate) ** 2 + 
                (difLon * this.proportionKmCoordinate) ** 2
            );
            if(distance <= this.maxDistance) {
                weightMatrix[i][j] = {
                    distance,
                    longDistance: distance,
                    dots: [i,j],
                };
                continue;
            }
            weightMatrix[i][j] = {
                distance: Infinity,
                longDistance: distance,
                dots: [i,j],
            };
        }
    }
  }
}
