import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { UsersMock } from '@mock/users/users.module.mock';
import { UserHistoryMock } from '@mock/user-history/user-historys.module.mock';
import { CoreModule, CreateUserHistoryDto, GetLocationDto, GetUserHistorysDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { AlgorithmsMock } from '@mock/algorithms/algorithms.module';
import { LocationStrategyMock } from '@mock/location-strategy/location-strategy.module';
import { LocationsMock } from '@mock/locations/locations.module.mock';
import { LocationStepsMock } from '@mock/location-steps/location-steps.module.mock';
import { LocationService } from '@location/location.service';

describe('LocationService', () => {
    let app: TestingModule;
    let locationService: LocationService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          LocationsMock,
          LocationStepsMock,
          UserHistoryMock,
          UsersMock,
          LocationStrategyMock,
          AlgorithmsMock,
          CoreModule,
        ],
        controllers: [],
        providers: [LocationService],
      }).compile();
      locationService = app.get<LocationService>(LocationService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('LocationService methods', () => {
      it('fixUserLocation', async () => {
        const dto = new CreateUserHistoryDto();
        const data = await locationService.fixUserLocation(clientReq, dto);
      })

      it('getRoute', async () => {
        const query = new GetLocationDto();
        const data = await locationService.getRoute(clientReq, query);
      })

      it('getUserLocation', async () => {
        const query = new GetUserHistorysDto();
        const data = await locationService.getUserLocation(clientReq, query);
      })
    })
})