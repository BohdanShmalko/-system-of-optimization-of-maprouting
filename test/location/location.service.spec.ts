import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { LocationService } from '@location/location.service';

describe('LocationService', () => {
    let app: TestingModule;
    let locationService: LocationService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [LocationService],
      }).compile();
      locationService = app.get<LocationService>(LocationService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('LocationService methods', () => {
      it('fixUserLocation', async () => {})
    })
})