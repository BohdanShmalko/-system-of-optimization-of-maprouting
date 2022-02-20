import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { ErrorService } from '@error/error.service'
import { ErrorController } from '@error/error.controller'

describe('ErrorController', () => {
    let app: TestingModule;
    let errorController: ErrorController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [ErrorController],
        providers: [ErrorService],
      }).compile();
      errorController = app.get<ErrorController>(ErrorController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('ErrorController methods', () => {
      it('fixError', async () => {})
    })
})