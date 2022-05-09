import { ETransports } from '@db';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BaseLocationStrategyService } from './base-location-startegy.service';
import { ILocationInput, ILocationsDots } from './location-strategy.service';
import { OpenRouteResponseType } from './strategy.type';

/**
* Openroute Strategy Service class
* @name OpenRouteStrategyService
* @kind class
*/
@Injectable()
export class OpenRouteStrategyService extends BaseLocationStrategyService {
  constructor(
    private http: HttpService,
  ) { super() }

  public modes = {
    [ETransports.Car]: 'driving-car',
    [ETransports.Hgv]: 'driving-hgv',
    [ETransports.Bike]: 'cycling-regular',
  };

  public async strategy(data: ILocationInput): Promise<ILocationsDots[]> {
    if(!this.modes[data.transport]) return this.getDefaultRes(data);
    const apiData = await this.getLocations(data);
    return apiData?.features[0]?.geometry?.coordinates?.map(
      (el, step) => ({
        lat: el[0].toString(),
        lon: el[1].toString(),
        step,
      })
    ) || this.getDefaultRes(data);
  }

  private async getLocations(data: ILocationInput): Promise<OpenRouteResponseType> {
    const mode = this.modes[data.transport];
    const result = await this.http.get(
      `https://api.openrouteservice.org/v2/directions/${mode}`,
      { 
        params: {
          start: `${data.startLat},${data.startLon}`,
          end: `${data.endLat},${data.endLon}`,
          api_key: process.env.OPENROUTE_KEY,
        } 
      }
    ).toPromise();
    return result.data;
  }
}
