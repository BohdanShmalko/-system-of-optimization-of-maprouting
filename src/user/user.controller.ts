import { Controller, Post, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
* User controller
* @name UserController
* @kind class
*/
@ApiTags('User login API')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

   /**
  * Send code for user phone
  * @name sendCode
  * @kind event
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  @ApiOperation({ summary: 'Send code by phone number' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('sendCode')
  sendCode(): string {
    return this.service.sendCode();
  }

  /**
  * Confirm phone code
  * @name confirmCode
  * @kind event
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  @ApiOperation({ summary: 'Confirm phone code' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('confirmCode')
  confirmCode(): string {
    return this.service.confirmCode();
  }

  /**
  * Login user by token (beta)
  * @name loginByToken
  * @kind event
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  @ApiOperation({ summary: 'Login user by token' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('login')
  loginByToken(): string {
    return this.service.loginUser();
  }
}
