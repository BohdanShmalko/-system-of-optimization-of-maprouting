import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { WebhookService } from '../../src/webhooks/webhooks.service';
import { WebhooksMock } from '@mock/webhooks/webhooks.module.mock';
import { WebhooksHistoryMock } from '@mock/webhooks-history/webhooks-history.module.mock';
import { CoreModule, CreateWebhookDto, GetWebhooksDto, UpdateWebhookDto, WebhookIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';

describe('WebhooksService', () => {
    let app: TestingModule;
    let webhookService: WebhookService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          WebhooksMock,
          WebhooksHistoryMock,
          CoreModule,
        ],
        providers: [WebhookService],
      }).compile();
      webhookService = app.get<WebhookService>(WebhookService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('webhookService methods', () => {
      it('getWebhooks', async () => {
        const query = new GetWebhooksDto();
        const data = await webhookService.getWebhooks(clientReq, query);
      })

      it('createNewWebhook', async () => {
        const dto = new CreateWebhookDto();
        const data = await webhookService.createNewWebhook(clientReq, dto);
      })

      it('deleteWebhook', async () => {
        const param = new WebhookIdDto();
        const data = await webhookService.deleteWebhook(clientReq, param);
      })

      it('updateWebhook', async () => {
        const param = new WebhookIdDto();
        const dto = new UpdateWebhookDto();
        const data = await webhookService.updateWebhook(clientReq, param, dto);
      })
    })
})