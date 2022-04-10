import { AuthModule, CoreModule } from '@common';
import { 
  ClientsModule, 
  ErrorsModule, 
  SuperAdminsModule, 
  UserHistorysModule, 
  UserRoomsModule, 
  UsersModule, 
  WebHooksHistoryModule, 
  WebHooksModule 
} from '@db';
import { Module } from '@nestjs/common';
import { SuperAdminsController } from './super-admins.controller';
import { SuperAdminsApiService } from './super-admins.service';

/**
* SuperAdmins module
* @name SuperAdminsModule
* @kind module
*/
@Module({
  imports: [
    SuperAdminsModule,
    ClientsModule,
    WebHooksModule,
    WebHooksHistoryModule,
    UsersModule,
    UserRoomsModule,
    UserHistorysModule,
    ErrorsModule,
    CoreModule,
    AuthModule,
  ],
  controllers: [SuperAdminsController],
  providers: [SuperAdminsApiService],
})
export class SuperAdminsApiModule {}
