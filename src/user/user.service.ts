import { ClientIdDto, CreateUserDto, GetUsersDto, UpdateUserDto, UserIdDto } from '@common';
import { Users } from '@db';
import { Injectable } from '@nestjs/common';

/**
* User service class
* @name UserService
* @kind class
*/
@Injectable()
export class UserService {
  constructor() {
  }

  /**
  * Get users
  * @name getUsers
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} users documents
  */
  getUsers(req, query: GetUsersDto): Promise<Users[]> {
      return;
  }

  /**
  * Create new users
  * @name createNewUser
  * @kind event
  * @property {Object}  dto  - create user dto
  * @property {Object}  req  - req object
  * @returns {Object} new user document
  */
  createNewUser(req, dto: CreateUserDto): Promise<Users> {
    return;
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
  updateUser(req, param: UserIdDto, dto: UpdateUserDto): Promise<Users> {
    return;
  }

  /**
  * Delete user
  * @name deleteUser
  * @kind function
  * @property {Object}  req  - req object
  * @property {Object}  param  - user id dto
  * @returns {string} delete status
  */
   deleteUser(req, param: ClientIdDto): Promise<string> {
    return;
  }
}
