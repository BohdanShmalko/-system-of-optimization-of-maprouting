import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { WsGateway } from '@ws/ws.gateway';
import { WsService } from '@ws/ws.service';

describe('WsGateway', () => {
    let app: TestingModule;
    let wsGateway: WsGateway;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        providers: [WsGateway, WsService],
      }).compile();
      wsGateway = app.get<WsGateway>(WsGateway);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('WsGateway methods', () => {
      it('afterInit', async () => {})

      it('handleConnection', async () => {})

      it('handleDisconnect', async () => {})

      it('handleErrorDevice', async () => {})

      it('handleUpdateLocation', async () => {})

      it('handleRouteUser', async () => {})
    })
})