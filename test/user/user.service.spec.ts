import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { UsersMock } from '@mock/users/users.module.mock';
import { UserRoomsMock } from '@mock/user-rooms/user-rooms.module.mock';
import { UserHistoryMock } from '@mock/user-history/user-historys.module.mock';
import { ErrorsMock } from '@mock/errors/errors.module.mock';
import { CoreModule, CreateUserDto, GetUsersDto, UpdateUserDto, UserIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { UserService } from 'src/user/user.service';

describe('UsersService', () => {
    let app: TestingModule;
    let userService: UserService;
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
        controllers: [],
        providers: [UserService],
      }).compile();
      userService = app.get<UserService>(UserService);
      mongo = app.get<MongoService>(MongoService);
    });
  
    describe('userService methods', () => {
      it('createNewUser', async () => {
        const dto = new CreateUserDto();
        const data = await userService.createNewUser(clientReq, dto);
      })

      it('deleteUser', async () => {
        const param = new UserIdDto();
        const data = await userService.deleteUser(clientReq, param);
      })

      it('getUsers', async () => {
        const query = new GetUsersDto();
        const data = await userService.getUsers(clientReq, query);
      })

      it('updateUser', async () => {
        const param = new UserIdDto();
        const dto = new UpdateUserDto();
        const data = await userService.updateUser(clientReq, param, dto);
      })
    })
})