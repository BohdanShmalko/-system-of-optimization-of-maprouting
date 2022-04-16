import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { UsersMock } from '@mock/users/users.module.mock';
import { UserRoomsMock } from '@mock/user-rooms/user-rooms.module.mock';
import { UserHistoryMock } from '@mock/user-history/user-historys.module.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';
import { CoreModule, CreateUserDto, GetUsersDto, UpdateUserDto, UserIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

describe('UsersController', () => {
    let app: TestingModule;
    let userController: UserController;
    let mongo: MongoService;
  
    beforeAll(async () => {
      app = await Test.createTestingModule({
        imports: [
          MongoModuleMock,
          UsersMock,
          UserRoomsMock,
          UserHistoryMock,
          ErrorsMock,
          CoreModule,
        ],
        controllers: [UserController],
        providers: [UserService],
      }).compile();
      userController = app.get<UserController>(UserController);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('userController methods', () => {
      it('createNewUser', async () => {
        const dto = new CreateUserDto();
        const data = await userController.createNewUser(clientReq, dto);
      })

      it('deleteUser', async () => {
        const param = new UserIdDto();
        const data = await userController.deleteUser(clientReq, param);
      })

      it('getUsers', async () => {
        const query = new GetUsersDto();
        const data = await userController.getUsers(clientReq, query);
      })

      it('updateUser', async () => {
        const param = new UserIdDto();
        const dto = new UpdateUserDto();
        const data = await userController.updateUser(clientReq, param, dto);
      })
    })
})