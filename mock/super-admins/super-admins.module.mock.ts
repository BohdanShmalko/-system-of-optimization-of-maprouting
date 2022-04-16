import { Module } from '@nestjs/common';
import { SuperAdminsService } from './super-admins.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [SuperAdminsService],
  exports: [SuperAdminsService],
})
export class SuperAdminsMock {}
