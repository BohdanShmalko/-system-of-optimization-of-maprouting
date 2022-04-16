import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { SuperAdminsMock } from '@mock/super-admins/super-admins.module.mock';
import { AuthModule, ClientIdDto, CoreModule, CreateClientDto, GetClientDto, UpdateClientDto } from '@common';
import { adminReq } from '@mock/auth/auth-mocks';
import { SuperAdminsController } from 'src/super-admins/super-admins.controller';
import { SuperAdminsApiService } from 'src/super-admins/super-admins.service';
import { ClientsMock } from '@mock/clients/clients.module.mock';
import { WebhooksHistoryMock } from '@mock/webhooks-history/webhooks-history.module.mock';
import { WebhooksMock } from '@mock/webhooks/webhooks.module.mock';
import { UsersMock } from '@mock/users/users.module.mock';
import { UserRoomsMock } from '@mock/user-rooms/user-rooms.module.mock';
import { UserHistoryMock } from '@mock/user-history/user-historys.module.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';

describe('SuperAdminsController', () => {
    let app: TestingModule;
    let superAdminsController: SuperAdminsController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          SuperAdminsMock,
          ClientsMock,
          WebhooksMock,
          WebhooksHistoryMock,
          UsersMock,
          UserRoomsMock,
          UserHistoryMock,
          ErrorsMock,
          AuthModule,
          CoreModule,
        ],
        controllers: [SuperAdminsController],
        providers: [SuperAdminsApiService],
      }).compile();
      superAdminsController = app.get<SuperAdminsController>(SuperAdminsController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('superAdminsController methods', () => {
      it('createNewClient', async () => {
        const dto = new CreateClientDto();
        const data = await superAdminsController.createNewClient(adminReq, dto);
      })

      it('deleteClient', async () => {
        const param = new ClientIdDto();
        const data = await superAdminsController.deleteClient(adminReq, param)
      })

      it('getClients', async () => {
        const query = new GetClientDto();
        const data = await superAdminsController.getClients(adminReq, query);
      })

      it('updateClient', async () => {
        const param = new ClientIdDto();
        const dto = new UpdateClientDto();
        const data = await superAdminsController.updateClient(adminReq, param, dto);
      })
    })
})