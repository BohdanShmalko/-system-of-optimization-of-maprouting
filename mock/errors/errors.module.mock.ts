import { Module } from '@nestjs/common';
import { ErrorsServiceMock } from './errors.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [ErrorsServiceMock],
  exports: [ErrorsServiceMock],
})
export class ErrorsMock {}
