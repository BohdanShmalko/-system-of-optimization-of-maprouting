import { Module } from '@nestjs/common';
import { SuperAdminsController } from './super-admins.controller';
import { SuperAdminsService } from './super-admins.service';

/**
* SuperAdmins module
* @name SuperAdminsModule
* @kind module
*/
@Module({
  imports: [],
  controllers: [SuperAdminsController],
  providers: [SuperAdminsService],
})
export class SuperAdminsModule {}
