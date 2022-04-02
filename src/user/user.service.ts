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
  * Login user by token (beta)
  * @name loginUser
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
   createNewUser(): string {
    return 'Hello World!';
  }

  /**
  * Login user by token (beta)
  * @name loginUser
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
   getUsers(): string {
    return 'Hello World!';
  }

  /**
  * Login user by token (beta)
  * @name loginUser
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  loginUser(): string {
    return 'Hello World!';
  }

  /**
  * Send code for user phone
  * @name sendCode
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  sendCode(): string {
    return;
  }

  /**
  * Confirm phone code
  * @name confirmCode
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  confirmCode(): string {
    return;
  }
}
