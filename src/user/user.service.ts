import { 
  CoreService, 
  CreateUserDto, 
  EHttpExceptionMessage, 
  GetUsersDto, 
  UpdateUserDto, 
  UserIdDto 
} from '@common';
import { 
  ErrorsService,
  UserHistorysService, 
  UserRoomsService, 
  Users, 
  UsersService 
} from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

/**
* User service class
* @name UserService
* @kind class
*/
@Injectable()
export class UserService {
  constructor(
    private readonly usersService: UsersService,
    private readonly core: CoreService,
    private readonly userRoomsService: UserRoomsService,
    private readonly userHistoryService: UserHistorysService,
    private readonly errorsService: ErrorsService,
  ) {}

  /**
  * Get users
  * @name getUsers
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} users documents
  */
  async getUsers(req, query: GetUsersDto): Promise<Users[]> {
    const searchObj = this.core.buildSearchPipeline(req.client, query);
    try {
        const result = await this.usersService.search({...searchObj, select: { clientId: -1 }});
        return result;
    }catch(e) {
        throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
    }
  }

  /**
  * Create new users
  * @name createNewUser
  * @kind event
  * @property {Object}  dto  - create user dto
  * @property {Object}  req  - req object
  * @returns {Object} new user document
  */
  async createNewUser(req, dto: CreateUserDto): Promise<Users> {
    const clientId = req.client.document._id;
    const newUser = await this.usersService.create({
      ...dto,
      clientId,
    });
    return newUser;
  }

  /**
  * Update user
  * @name updateUser
  * @kind event
  * @property {Object}  dto  - update user dto
  * @property {Object}  param  - user id dto
  * @property {Object}  req  - req object
  * @returns {Object} new user document
  */
  async updateUser(req, param: UserIdDto, dto: UpdateUserDto): Promise<Users> {
    const userId = param.userId;
    const clientId = req.client.document._id;
    const existingDocument = await this.usersService.findByIdAndClient(userId, clientId);
    if(!existingDocument) throw new HttpException(
      EHttpExceptionMessage.UserNotExistId, 
      HttpStatus.BAD_REQUEST
    );
    const updatedUser = await this.usersService.updateUserById(userId, dto);
    return updatedUser;
  }

  /**
  * Delete user
  * @name deleteUser
  * @kind function
  * @property {Object}  req  - req object
  * @property {Object}  param  - user id dto
  * @returns {string} delete status
  */
   async deleteUser(req, param: UserIdDto): Promise<string> {
    const userId = param.userId;
    const clientId = req.client.document._id;
    const existingDocument = await this.usersService.findByIdAndClient(userId, clientId);
    if(!existingDocument) throw new HttpException(
      EHttpExceptionMessage.UserNotExistId, 
      HttpStatus.BAD_REQUEST
    );
    await this.userHistoryService.deleteByUserId(userId);
    await this.userRoomsService.deleteByUserId(userId);
    await this.errorsService.deleteByUserId(userId);
    await this.usersService.deleteById(userId);
    return 'ok';
  }
}
