import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { AuthService } from '@common/auth/auth.service'

describe('AuthService', () => {
    let app: TestingModule;
    let authService: AuthService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [AuthService],
      }).compile();
      authService = app.get<AuthService>(AuthService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('AuthService method', () => {
      it('getJwtData', async () => {})

      it('generateToken', async () => {})

      it('diff', async () => {})
    })
})