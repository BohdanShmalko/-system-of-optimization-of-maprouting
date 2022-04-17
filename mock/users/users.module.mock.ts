import { Module } from '@nestjs/common';
import { UsersService } from './users.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
