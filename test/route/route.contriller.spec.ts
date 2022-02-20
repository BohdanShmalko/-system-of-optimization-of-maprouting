import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { RouteService } from '@route/route.service'
import { RouteController } from '@route/route.controller'

describe('RouteController', () => {
    let app: TestingModule;
    let routeController: RouteController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [RouteController],
        providers: [RouteService],
      }).compile();
      routeController = app.get<RouteController>(RouteController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('RouteController methods', () => {
      it('changeUserAlgorithm', async () => {})

      it('routeToPlace', async () => {})
    })
})