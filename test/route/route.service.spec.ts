import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { RouteService } from '@route/route.service'

describe('RouteService', () => {
    let app: TestingModule;
    let routeService: RouteService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [RouteService],
      }).compile();
      routeService = app.get<RouteService>(RouteService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('RouteService methods', () => {
      it('changeUserAlgorithm', async () => {})

      it('routeToPlace', async () => {})
    })
})