import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsersModule } from '@db'

/**
* User module
* @name UserModule
* @kind module
*/
@Module({
  imports: [
      UsersModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
