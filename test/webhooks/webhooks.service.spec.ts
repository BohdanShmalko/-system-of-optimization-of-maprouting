import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { UserService } from '@user/user.service'

describe('UserService', () => {
    let app: TestingModule;
    let userService: UserService;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [],
        providers: [UserService],
      }).compile();
      userService = app.get<UserService>(UserService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('UserService methods', () => {
      it('loginUser', async () => {})

      it('sendCode', async () => {})

      it('confirmCode', async () => {})
    })
})