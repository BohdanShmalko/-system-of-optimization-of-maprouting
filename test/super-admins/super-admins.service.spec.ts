import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { SuperAdminsMock } from '@mock/super-admins/super-admins.module.mock';
import { AuthModule, ClientIdDto, CoreModule, CreateClientDto, GetClientDto, UpdateClientDto } from '@common';
import { adminReq } from '@mock/auth/auth-mocks';
import { SuperAdminsApiService } from 'src/super-admins/super-admins.service';
import { ClientsMock } from '@mock/clients/clients.module.mock';
import { WebhooksHistoryMock } from '@mock/webhooks-history/webhooks-history.module.mock';
import { WebhooksMock } from '@mock/webhooks/webhooks.module.mock';
import { UsersMock } from '@mock/users/users.module.mock';
import { UserRoomsMock } from '@mock/user-rooms/user-rooms.module.mock';
import { UserHistoryMock } from '@mock/user-history/user-historys.module.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';

describe('SuperAdminsApiService', () => {
    let app: TestingModule;
    let superAdminsService: SuperAdminsApiService;
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
        controllers: [],
        providers: [SuperAdminsApiService],
      }).compile();
      superAdminsService = app.get<SuperAdminsApiService>(SuperAdminsApiService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('superAdminsService methods', () => {
      it('createNewClient', async () => {
        const dto = new CreateClientDto();
        const data = await superAdminsService.createNewClient(adminReq, dto);
      })

      it('deleteClient', async () => {
        const param = new ClientIdDto();
        const data = await superAdminsService.deleteClient(adminReq, param)
      })

      it('getClients', async () => {
        const query = new GetClientDto();
        const data = await superAdminsService.getClients(adminReq, query);
      })

      it('updateClient', async () => {
        const param = new ClientIdDto();
        const dto = new UpdateClientDto();
        const data = await superAdminsService.updateClient(adminReq, param, dto);
      })
    })
})