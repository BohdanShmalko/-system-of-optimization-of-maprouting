import { AuthModule } from '@common';
import { ClientsModule, SuperAdminsModule } from '@db';
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
    AuthModule,
  ],
  controllers: [SuperAdminsController],
  providers: [SuperAdminsApiService],
})
export class SuperAdminsApiModule {}
