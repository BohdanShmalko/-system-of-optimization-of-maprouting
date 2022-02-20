import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { LocationService } from '@location/location.service';
import { LocationController } from '@location/location.controller';

describe('LocationController', () => {
    let app: TestingModule;
    let locationController: LocationController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [LocationController],
        providers: [LocationService],
      }).compile();
      locationController = app.get<LocationController>(LocationController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('LocationController methods', () => {
      it('fixUserLocation', async () => {})
    })
})