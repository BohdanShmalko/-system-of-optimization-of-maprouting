import { MongoService } from '@mock/mongo/mongo.service.mock';
import { CoreService, ErrorIdDto, GetErrorsDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { ErrorController } from '@error/error.controller';
import { ErrorService } from '@error/error.service';
import { ErrorsService as ErrorsServiceMock } from '@mock/errors/errors.service.mock';

describe('ErrorController', () => {
    const mongo: MongoService = new MongoService();
    const errorController: ErrorController = new ErrorController(
      new ErrorService(
        new ErrorsServiceMock(mongo) as any,
        new CoreService(),
      )
    );
  
    describe('errorController methods', () => {
      it('deleteError', async () => {
        mongo.errors = [{
          _id: 'uniqueId',
          clientId: clientReq.client.document._id,
          userId: 'uniqueUserId',
          message: 'some error',
        }]

        const param = new ErrorIdDto();
        param.errorId = 'uniqueId';
        const data = await errorController.deleteError(clientReq, param);
        expect(mongo.errors).toEqual([]);
        mongo.clearDb();
      })

      it('getErrors', async () => {
        mongo.errors = [{
          _id: 'uniqueId',
          clientId: clientReq.client.document._id,
          userId: 'uniqueUserId',
          message: 'some error',
        }]

        const query = new GetErrorsDto();
        const data = await errorController.getErrors(clientReq, query);
        expect(data).toEqual([
          {
            _id: 'uniqueId',
            clientId: '625aff2b0eb8b15a9867eb5d',
            userId: 'uniqueUserId',
            message: 'some error'
          }
        ]);
        mongo.clearDb();
      })
    })
})