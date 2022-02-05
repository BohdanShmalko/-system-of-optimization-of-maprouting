import { Controller, Post, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User login API')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({ summary: 'Send code by phone number' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('sendCode')
  sendCode(): string {
    return this.service.sendCode();
  }

  @ApiOperation({ summary: 'Confirm phone code' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('confirmCode')
  confirmCode(): string {
    return this.service.confirmCode();
  }

  @ApiOperation({ summary: 'Login user by token' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Post('login')
  loginByToken(): string {
    return this.service.loginUser();
  }
}
