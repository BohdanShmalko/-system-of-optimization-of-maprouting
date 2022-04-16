import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';
import { CoreModule, CreateUserDto, ErrorIdDto, GetErrorsDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { ErrorService } from '@error/error.service';

describe('ErrorService', () => {
    let app: TestingModule;
    let errorService: ErrorService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          ErrorsMock,
          CoreModule,
        ],
        controllers: [],
        providers: [ErrorService],
      }).compile();
      errorService = app.get<ErrorService>(ErrorService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('errorService methods', () => {
      it('deleteError', async () => {
        const param = new ErrorIdDto();
        const data = await errorService.deleteError(clientReq, param);
      })

      it('getErrors', async () => {
        const query = new GetErrorsDto();
        const data = await errorService.getErrors(clientReq, query);
      })
    })
})