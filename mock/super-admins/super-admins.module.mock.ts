import { Module } from '@nestjs/common';
import { SuperAdminsService } from './super-admins.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [SuperAdminsService],
  exports: [SuperAdminsService],
})
export class SuperAdminsModule {}
