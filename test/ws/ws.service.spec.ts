import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { WsService } from '@ws/ws.service';

describe('WsService', () => {
    let app: TestingModule;
    let wsService: WsService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [WsService],
      }).compile();
      wsService = app.get<WsService>(WsService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('WsService methods', () => {
      it('afterInit', async () => {})

      it('handleConnection', async () => {})

      it('handleDisconnect', async () => {})

      it('handleErrorDevice', async () => {})

      it('handleUpdateLocation', async () => {})

      it('handleRouteUser', async () => {})
    })
})