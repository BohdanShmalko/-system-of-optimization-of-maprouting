import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { ErrorService } from '@error/error.service'

describe('ErrorService', () => {
    let app: TestingModule;
    let errorService: ErrorService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [ErrorService],
      }).compile();
      errorService = app.get<ErrorService>(ErrorService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('ErrorService methods', () => {
      it('fixError', async () => {})
    })
})