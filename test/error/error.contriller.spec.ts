import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';
import { CoreModule, CreateUserDto, ErrorIdDto, GetErrorsDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { ErrorController } from '@error/error.controller';
import { ErrorService } from '@error/error.service';

describe('ErrorController', () => {
    let app: TestingModule;
    let errorController: ErrorController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          ErrorsMock,
          CoreModule,
        ],
        controllers: [ErrorController],
        providers: [ErrorService],
      }).compile();
      errorController = app.get<ErrorController>(ErrorController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('errorController methods', () => {
      it('deleteError', async () => {
        const param = new ErrorIdDto();
        const data = await errorController.deleteError(clientReq, param);
      })

      it('getErrors', async () => {
        const query = new GetErrorsDto();
        const data = await errorController.getErrors(clientReq, query);
      })
    })
})