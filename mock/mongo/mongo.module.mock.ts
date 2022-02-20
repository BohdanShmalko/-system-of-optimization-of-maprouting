import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service.mock';

@Module({
  controllers: [],
  providers: [MongoService],
  exports: [MongoService],
})
export class MongoModuleMock {}
