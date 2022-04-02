import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { UserController } from '@user/user.controller'
import { UserService } from '@user/user.service'

describe('WebhooksController', () => {
    let app: TestingModule;
    let userController: UserController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
        ],
        controllers: [UserController],
        providers: [UserService],
      }).compile();
      userController = app.get<UserController>(UserController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('UserController methods', () => {
      it('loginUser', async () => {})

      it('sendCode', async () => {})

      it('confirmCode', async () => {})
    })
})