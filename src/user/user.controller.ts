import { 
  Controller, 
  Post, 
  HttpCode, 
  UseGuards, 
  Get, 
  Req, 
  Query, 
  Body, 
  Put,
  Param,
  Delete
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { 
  ApiKeyAuthGuard, 
  Keys,
  CreateUserDto,
  GetUsersDto,
  UserIdDto,
  UpdateUserDto,
} from '@common';
import { Users } from '@db';

/**
* User controller
* @name UserController
* @kind class
*/
@ApiTags('User API')
@UseGuards(ApiKeyAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  /**
  * Get users
  * @name getUsers
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} users documents
  */
  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({ status: 200, type: () => Users, isArray: true })
  @HttpCode(200)
  @Keys()
  @Get()
  getUsers(
       @Req() req, 
       @Query() query: GetUsersDto
   ): Promise<Users[]> {
       return this.service.getUsers(req, query);
   }
 
   /**
   * Create new users
   * @name createNewUser
   * @kind event
   * @property {Object}  dto  - create user dto
   * @property {Object}  req  - req object
   * @returns {Object} new user document
   */
   @ApiOperation({ summary: 'Create new user' })
   @ApiResponse({ status: 201, type: () => Users })
   @HttpCode(201)
   @Keys()
   @Post()
   createNewUser(
       @Req() req, 
       @Body() dto: CreateUserDto
   ): Promise<Users> {
       return this.service.createNewUser(req, dto);
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
   @ApiOperation({ summary: 'Update user' })
   @ApiResponse({ status: 201, type: () => Users })
   @HttpCode(201)
   @Keys()
   @Put(':userId')
   updateUser(
       @Req() req, 
       @Param() param: UserIdDto,
       @Body() dto: UpdateUserDto,
   ): Promise<Users> {
       return this.service.updateUser(req, param, dto);
   }
 
   /**
   * Delete user
   * @name deleteUser
   * @kind event
   * @property {Object}  req  - req object
   * @property {Object}  param  - user id dto
   * @returns {string} delete status
   */
   @ApiOperation({ summary: 'Delete user' })
   @ApiResponse({ status: 204, type: () => String })
   @HttpCode(204)
   @Keys()
   @Delete(':userId')
   deleteUser(
       @Req() req, 
       @Param() param: UserIdDto
   ): Promise<string> {
       return this.service.deleteUser(req, param);
   }
}
