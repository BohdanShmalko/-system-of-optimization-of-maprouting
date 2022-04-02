import { Module } from '@nestjs/common';
import { SuperAdminsServiceMock } from './super-admins.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [SuperAdminsServiceMock],
  exports: [SuperAdminsServiceMock],
})
export class SuperAdminsMock {}
