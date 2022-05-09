import { ETransports } from '@db';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BaseLocationStrategyService } from './base-location-startegy.service';
import { ILocationInput, ILocationsDots } from './location-strategy.service';
import { BingResponseType } from './strategy.type';

/**
* Google Strategy Service class
* @name BingStrategyService
* @kind class
*/
@Injectable()
export class BingStrategyService extends BaseLocationStrategyService {
  constructor(
    private http: HttpService,
  ) { super() }

  public modes = {
    [ETransports.Walking]: 'walking',
    [ETransports.Car]: 'driving',
    [ETransports.Transit]: 'transit',
  };

  public async strategy(data: ILocationInput): Promise<ILocationsDots[]> {
    if(!this.modes[data.transport]) return this.getDefaultRes(data);
    const apiData = await this.getLocations(data);
    return apiData.resourceSets[0]?.resources[0]?.routeLegs[0]?.itineraryItems?.map(
      (el, step) => ({
        lat: el.maneuverPoint.coordinates[0].toString(),
        lon: el.maneuverPoint.coordinates[1].toString(),
        step,
      })
    ) || this.getDefaultRes(data);
  }

  private async getLocations(data: ILocationInput): Promise<BingResponseType> {
    const mode = this.modes[data.transport];
    const result = await this.http.get(
      `http://dev.virtualearth.net/REST/V1/Routes/${mode}`,
      { 
        params: {
          'wp.0': `${data.startLat},${data.startLon}`,
          'wp.1': `${data.endLat},${data.endLon}`,
          key: process.env.BING_KEY,
        } 
      }
    ).toPromise();
    return result.data;
  }
}
