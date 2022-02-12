import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '@common/index';
import { UsersModule } from '@db/index'

/**
* User module
* @name UserModule
* @kind module
*/
@Module({
  imports: [
      AuthModule,
      UsersModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
