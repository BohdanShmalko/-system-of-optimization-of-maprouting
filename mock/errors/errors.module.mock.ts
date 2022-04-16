import { Module } from '@nestjs/common';
import { ErrorsService } from './errors.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [ErrorsService],
  exports: [ErrorsService],
})
export class ErrorsMock {}
