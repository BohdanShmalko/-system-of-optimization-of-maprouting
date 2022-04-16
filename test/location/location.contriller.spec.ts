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
import { LocationController } from '@location/location.controller';
import { LocationService } from '@location/location.service';

describe('LocationController', () => {
    let app: TestingModule;
    let locationController: LocationController;
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
        controllers: [LocationController],
        providers: [LocationService],
      }).compile();
      locationController = app.get<LocationController>(LocationController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('locationController methods', () => {
      it('fixUserLocation', async () => {
        const dto = new CreateUserHistoryDto();
        const data = await locationController.fixUserLocation(clientReq, dto);
      })

      it('getRoute', async () => {
        const query = new GetLocationDto();
        const data = await locationController.getRoute(clientReq, query);
      })

      it('getUserLocation', async () => {
        const query = new GetUserHistorysDto();
        const data = await locationController.getUserLocation(clientReq, query);
      })
    })
})