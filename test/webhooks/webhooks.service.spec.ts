import { MongoService } from '@mock/mongo/mongo.service.mock';
import { WebhookService } from '../../src/webhooks/webhooks.service';
import { CoreService, CreateWebhookDto, GetWebhooksDto, UpdateWebhookDto, WebhookIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { WebhooksService as WebhooksServiceMock } from '@mock/webhooks/webhooks.service.mock';
import { WebhooksHistoryService } from '@mock/webhooks-history/webhooks-history.service.mock';
import { EWebhookEvents } from '@db';

describe('WebhooksService', () => {
    const mongo: MongoService = new MongoService();
    let webhookService: WebhookService = new WebhookService(
      new WebhooksServiceMock(mongo) as any,
      new WebhooksHistoryService(mongo) as any,
      new CoreService(),
    );
  
    describe('webhookService methods', () => {
      it('getWebhooks', async () => {
        const newDto1 = new CreateWebhookDto();
        newDto1.event = EWebhookEvents.ClientUpdated;
        newDto1.name = 'update client1';
        newDto1.url = 'http://example.domain1/webhooks';
        const newWebhook1 = await webhookService.createNewWebhook(clientReq, newDto1);

        const newDto2 = new CreateWebhookDto();
        newDto2.event = EWebhookEvents.ClientUpdated;
        newDto2.name = 'update client2';
        newDto2.url = 'http://example.domain2/webhooks';
        const newWebhook2 = await webhookService.createNewWebhook(clientReq, newDto2);

        const query = new GetWebhooksDto();
        const data = await webhookService.getWebhooks(clientReq, query);
        expect(data).toEqual([newWebhook1, newWebhook2]);
        mongo.clearDb();
      })

      it('createNewWebhook', async () => {
        const newDto = new CreateWebhookDto();
        newDto.event = EWebhookEvents.ClientUpdated;
        newDto.name = 'update client';
        newDto.url = 'http://example.domain/webhooks';
        const newWebhook: any = await webhookService.createNewWebhook(clientReq, newDto);
        delete newWebhook._id;
        expect(newWebhook).toEqual({    
          event: 'Client Updated',
          name: 'update client',
          url: 'http://example.domain/webhooks',
          clientId: clientReq.client.document._id, 
        });
        mongo.clearDb();
      })

      it('deleteWebhook', async () => {
        const newDto = new CreateWebhookDto();
        newDto.event = EWebhookEvents.ClientUpdated;
        newDto.name = 'update client';
        newDto.url = 'http://example.domain/webhooks';
        const newWebhook: any = await webhookService.createNewWebhook(clientReq, newDto);

        const param = new WebhookIdDto();
        param.webhookId = newWebhook._id;
        const data = await webhookService.deleteWebhook(clientReq, param);
        expect(mongo.webhooks).toEqual([]);
        mongo.clearDb();
      })

      it('updateWebhook', async () => {
        const newDto = new CreateWebhookDto();
        newDto.event = EWebhookEvents.ClientUpdated;
        newDto.name = 'update client';
        newDto.url = 'http://example.domain/webhooks';
        const newWebhook: any = await webhookService.createNewWebhook(clientReq, newDto);

        const param = new WebhookIdDto();
        param.webhookId = newWebhook._id;
        const dto = new UpdateWebhookDto();
        dto.event = EWebhookEvents.ErrorDeleted;
        dto.name = 'error deleted';
        const data = await webhookService.updateWebhook(clientReq, param, dto);
        expect(data).toEqual({
          ...newWebhook,
          event: EWebhookEvents.ErrorDeleted,
          name: 'error deleted',
        });
        mongo.clearDb();
      })
    })
})