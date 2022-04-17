import { Module } from '@nestjs/common';
import { ErrorsService } from './errors.service.mock';
import { MongoModuleModule } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleModule],
  providers: [ErrorsService],
  exports: [ErrorsService],
})
export class ErrorsModule {}
