import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { WebhookService } from '../../src/webhooks/webhooks.service';
import { WebhookController } from '../../src/webhooks/webhooks.controller';
import { WebhooksMock } from '@mock/webhooks/webhooks.module.mock';
import { WebhooksHistoryMock } from '@mock/webhooks-history/webhooks-history.module.mock';
import { CoreModule, CreateWebhookDto, GetWebhooksDto, UpdateWebhookDto, WebhookIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';

describe('WebhooksController', () => {
    let app: TestingModule;
    let webhookController: WebhookController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          WebhooksMock,
          WebhooksHistoryMock,
          CoreModule,
        ],
        controllers: [WebhookController],
        providers: [WebhookService],
      }).compile();
      webhookController = app.get<WebhookController>(WebhookController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('WebhookController methods', () => {
      it('getWebhooks', async () => {
        const query = new GetWebhooksDto();
        const data = await webhookController.getWebhooks(clientReq, query);
      })

      it('createNewWebhook', async () => {
        const dto = new CreateWebhookDto();
        const data = await webhookController.createNewWebhook(clientReq, dto);
      })

      it('deleteWebhook', async () => {
        const param = new WebhookIdDto();
        const data = await webhookController.deleteWebhook(clientReq, param);
      })

      it('updateWebhook', async () => {
        const param = new WebhookIdDto();
        const dto = new UpdateWebhookDto();
        const data = await webhookController.updateWebhook(clientReq, param, dto);
      })
    })
})