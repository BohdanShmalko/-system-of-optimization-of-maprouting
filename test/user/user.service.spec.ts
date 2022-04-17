import { MongoService } from '@mock/mongo/mongo.service.mock';
import { CoreService, CreateUserDto, GetUsersDto, UpdateUserDto, UserIdDto } from '@common';
import { clientReq } from '@mock/auth/auth-mocks';
import { UserService } from '../../src/user/user.service';
import { UsersService } from '@mock/users/users.service.mock';
import { UserRoomsService } from '@mock/user-rooms/user-rooms.service.mock';
import { UserHistorysService } from '@mock/user-history/user-historys.service.mock';
import { ErrorsService } from '@mock/errors/errors.service.mock';
import { EAlgorithms } from '@db';

describe('UsersService', () => {
    const mongo: MongoService = new MongoService();
    let userService: UserService = new UserService(
      new UsersService(mongo) as any,
      new CoreService(),
      new UserRoomsService(mongo) as any,
      new UserHistorysService(mongo) as any,
      new ErrorsService(mongo) as any,
    )
  
    describe('userService methods', () => {
      it('createNewUser', async () => {
        const newDto = new CreateUserDto();
        newDto.algorithm = EAlgorithms.BipartiteSubset;
        newDto.externalId = 'some ext id';
        newDto.optionalParams = { email: 'test' };
        const newUser: any = await userService.createNewUser(clientReq, newDto);
        delete newUser._id;
        expect(newUser).toEqual({
          algorithm: 'Bipartite Subset',
          externalId: 'some ext id',
          optionalParams: { email: 'test' },
          clientId: clientReq.client.document._id,
        });
        mongo.clearDb();
      })

      it('deleteUser', async () => {
        const newDto = new CreateUserDto();
        newDto.algorithm = EAlgorithms.BipartiteSubset;
        newDto.externalId = 'some ext id';
        newDto.optionalParams = { email: 'test' };
        const newUser: any = await userService.createNewUser(clientReq, newDto);

        const param = new UserIdDto();
        param.userId = newUser._id;
        const data = await userService.deleteUser(clientReq, param);
        expect(mongo.users).toEqual([]);
        mongo.clearDb();
      })

      it('getUsers', async () => {
        const newDto1 = new CreateUserDto();
        newDto1.algorithm = EAlgorithms.BipartiteSubset;
        newDto1.externalId = 'some ext id1';
        newDto1.optionalParams = { email: 'test1' };
        const newUser1: any = await userService.createNewUser(clientReq, newDto1);

        const newDto2 = new CreateUserDto();
        newDto2.algorithm = EAlgorithms.Google;
        newDto2.externalId = 'some ext id2';
        newDto2.optionalParams = { email: 'test2' };
        const newUser2: any = await userService.createNewUser(clientReq, newDto2); 

        const query = new GetUsersDto();
        const data = await userService.getUsers(clientReq, query);
        expect(data).toEqual([newUser1, newUser2]);
        mongo.clearDb();
      })

      it('updateUser', async () => {
        const newDto = new CreateUserDto();
        newDto.algorithm = EAlgorithms.BipartiteSubset;
        newDto.externalId = 'some ext id';
        newDto.optionalParams = { email: 'test' };
        const newUser: any = await userService.createNewUser(clientReq, newDto);

        const param = new UserIdDto();
        param.userId = newUser._id;
        const dto = new UpdateUserDto();
        dto.algorithm = EAlgorithms.Google;
        dto.externalId = 'another id';
        dto.optionalParams = {};
        const data = await userService.updateUser(clientReq, param, dto);
        expect(data).toEqual({
          ...newUser, 
          algorithm: EAlgorithms.Google,
          externalId: 'another id',
          optionalParams: {},
        });
        mongo.clearDb();
      })
    })
})