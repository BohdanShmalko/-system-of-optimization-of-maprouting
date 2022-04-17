import { MongoService } from '@mock/mongo/mongo.service.mock';
import { CreateUserHistoryDto, GetLocationDto, GetUserHistorysDto, CoreService } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { LocationService } from '@location/location.service';
import { LocationsService as LocationsServiceMock } from '@mock/locations/locations.service.mock';
import { LocationStepsService } from '@mock/location-steps/location-steps.service.mock';
import { UserHistorysService } from '@mock/user-history/user-historys.service.mock';
import { UsersService } from '@mock/users/users.service.mock';
import { AlgorithmsService } from '@mock/algorithms/algorithms.service';
import { LocationStrategyService } from '@mock/location-strategy/location-strategy.service';
import { BipartiteSubsetsService } from '@mock/algorithms/bipartite-subset.service';
import { GoogleStrategyService } from '@mock/location-strategy/google-strategy.service';
import { HereStrategyService } from '@mock/location-strategy/here-strategy.service';
import { ETransports } from '@db';

describe('LocationService', () => {
    const mongo: MongoService = new MongoService();
    let locationService: LocationService = new LocationService(
      new LocationsServiceMock(mongo) as any,
      new LocationStepsService(mongo) as any,
      new UserHistorysService(mongo) as any,
      new UsersService(mongo) as any,
      new CoreService(),
      new AlgorithmsService(
        new BipartiteSubsetsService()
      ) as any,
      new LocationStrategyService(
        new GoogleStrategyService(),
        new HereStrategyService(),
      ) as any,
   );
  
    describe('LocationService methods', () => {
      it('fixUserLocation', async () => {  
        mongo.users = [
          {
            _id: 'uniqueUserId',
            clientId: clientReq.client.document._id,
            name: 'user1'
          }
        ]

        const newDto = new CreateUserHistoryDto();
        newDto.lat = '10.00';
        newDto.lon = '11';
        newDto.time = 111111111;
        newDto.userId = 'uniqueUserId';
        const data = await locationService.fixUserLocation(clientReq, newDto);
        expect(data).toEqual({
          _id: '61ade95308cfdf9f43748fe1',
          lat: '10.00',
          lon: '11',
          time: 111111111,
          userId: 'uniqueUserId',
          clientId: '625aff2b0eb8b15a9867eb5d'
        });
        mongo.clearDb();
      })

      it('getRoute', async () => {
        mongo.users = [
          {
            _id: 'uniqueUserId',
            clientId: clientReq.client.document._id,
            name: 'user1'
          }
        ]

        const query = new GetLocationDto();
        query.endLat = '11.11';
        query.endLon = '12.13';
        query.startLat = '13.14';
        query.startLon = '14.15';
        query.transport = ETransports.Foot;
        query.userId = 'uniqueUserId';
        const data = await locationService.getRoute(clientReq, query);
        expect(data).toEqual([]);
        mongo.clearDb();
      })

      it('getUserLocation', async () => {
        mongo.users = [
          {
            _id: 'uniqueUserId',
            clientId: clientReq.client.document._id,
            name: 'user1'
          }
        ]

        const newDto = new CreateUserHistoryDto();
        newDto.lat = '10.00';
        newDto.lon = '11';
        newDto.time = 111111111;
        newDto.userId = 'uniqueUserId';
        const newLocation = await locationService.fixUserLocation(clientReq, newDto);

        const query = new GetUserHistorysDto();
        const data = await locationService.getUserLocation(clientReq, query);
        expect(data).toEqual([
          {
            _id: '61ade95308cfdf9f43748fe1',
            lat: '10.00',
            lon: '11',
            time: 111111111,
            userId: 'uniqueUserId',
            clientId: '625aff2b0eb8b15a9867eb5d'
          }
        ]);
        mongo.clearDb();
      })
    })
})