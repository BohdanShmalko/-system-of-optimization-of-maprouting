import { MongoService } from '@mock/mongo/mongo.service.mock';
import { AuthService, ClientIdDto, CoreService, CreateClientDto, GetClientDto, UpdateClientDto } from '@common';
import { adminReq, clientReq } from '@mock/auth/auth-mocks';
import { SuperAdminsController } from '../../src/super-admins/super-admins.controller';
import { SuperAdminsApiService } from '../../src/super-admins/super-admins.service';
import { SuperAdminsService as SuperAdminsServiceMock } from '@mock/super-admins/super-admins.service.mock';
import { ClientsService } from '@mock/clients/clients.service.mock';
import { WebhooksService } from '@mock/webhooks/webhooks.service.mock';
import { WebhooksHistoryService } from '@mock/webhooks-history/webhooks-history.service.mock';
import { UsersService } from '@mock/users/users.service.mock';
import { UserHistorysService } from '@mock/user-history/user-historys.service.mock';
import { ErrorsService } from '@mock/errors/errors.service.mock';
import { UserRoomsService } from '@mock/user-rooms/user-rooms.service.mock';

describe('SuperAdminsController', () => {
    const mongo: MongoService = new MongoService();
    let superAdminsController: SuperAdminsController = new SuperAdminsController(
      new SuperAdminsApiService(
        new SuperAdminsServiceMock(mongo) as any,
        new ClientsService(mongo) as any,
        new AuthService(
          new SuperAdminsServiceMock(mongo) as any,
          new ClientsService(mongo) as any,
        ) as any,
        new CoreService(),
        new WebhooksService(mongo) as any,
        new WebhooksHistoryService(mongo) as any,
        new UsersService(mongo) as any,
        new UserRoomsService(mongo) as any,
        new UserHistorysService(mongo) as any,
        new ErrorsService(mongo) as any,
      )
    );
  
    describe('superAdminsController methods', () => {
      it('createNewClient', async () => {
        const dto = new CreateClientDto();
        dto.name = 'my cool client3';
        const data = await superAdminsController.createNewClient(adminReq, dto);
        delete data.apiKey;
        expect(data).toEqual({
          _id: '61ade95308cfdf9f43748fe1',
          name: 'my cool client3',
          adminCreated: '625afebe1e6f8eee5bf3528b',     
          adminUpdated: '625afebe1e6f8eee5bf3528b',
        });
        mongo.clearDb();
      })

      it('deleteClient', async () => {
        const dto = new CreateClientDto();
        dto.name = 'my cool client2';
        const newClient: any = await superAdminsController.createNewClient(adminReq, dto);

        const param = new ClientIdDto();
        param.clientId = newClient._id;
        const data = await superAdminsController.deleteClient(adminReq, param);
        expect(mongo.clients).toEqual([clientReq.client.document]);
        mongo.clearDb();
      })

      it('getClients', async () => {
        const dto = new CreateClientDto();
        dto.name = 'my cool client1';
        const newClient: any = await superAdminsController.createNewClient(adminReq, dto);

        const query = new GetClientDto();
        const data = await superAdminsController.getClients(adminReq, query);
        expect(data).toEqual([
          {
            _id: '625aff2b0eb8b15a9867eb5d',
            adminCreated: '625afebe1e6f8eee5bf3528b',
            adminUpdated: '625afebe1e6f8eee5bf3528b',
            name: 'testClient',
            apiKey: '93704f8b-d536-4737-86ec-73f06631140c'
          },
          newClient
        ]);
        mongo.clearDb();
      })

      it('updateClient', async () => {
        const newDto = new CreateClientDto();
        newDto.name = 'my cool client';
        const newClient: any = await superAdminsController.createNewClient(adminReq, newDto);

        const param = new ClientIdDto();
        param.clientId = newClient._id;
        const dto = new UpdateClientDto();
        dto.name = 'new client name';
        dto.newApiKey = 'some new api key';
        const data = await superAdminsController.updateClient(adminReq, param, dto);
        expect(data).toEqual({
          ...newClient,
          apiKey: 'some new api key',
          name: 'new client name',
        });
        mongo.clearDb();
      })
    })
})