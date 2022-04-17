import { MongoService } from '@mock/mongo/mongo.service.mock';
import { CoreService, ErrorIdDto, GetErrorsDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { ErrorService } from '@error/error.service';
import { ErrorsService as ErrorsServiceMock } from '@mock/errors/errors.service.mock';

describe('ErrorService', () => {
  const mongo: MongoService = new MongoService();
  const errorService: ErrorService = new ErrorService(
    new ErrorsServiceMock(mongo) as any,
    new CoreService(),
  );
  
    describe('errorService methods', () => {
      it('deleteError', async () => {
        mongo.errors = [{
          _id: 'uniqueId',
          clientId: clientReq.client.document._id,
          userId: 'uniqueUserId',
          message: 'some error',
        }]

        const param = new ErrorIdDto();
        param.errorId = 'uniqueId';
        const data = await errorService.deleteError(clientReq, param);
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
        const data = await errorService.getErrors(clientReq, query);
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