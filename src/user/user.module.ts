import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { 
  ErrorsModule,
  UserHistorysModule,
  UserRoomsModule,
  UsersModule 
} from '@db'
import { CoreModule } from '@common';

/**
* User module
* @name UserModule
* @kind module
*/
@Module({
  imports: [
      UsersModule,
      UserRoomsModule,
      UserHistorysModule,
      ErrorsModule,
      CoreModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
