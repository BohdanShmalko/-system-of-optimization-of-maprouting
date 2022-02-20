import { Module } from '@nestjs/common';
import { DevicesServiceMock } from './devices.service.mock';
import { MongoModuleMock } from '../mongo/mongo.module.mock'

@Module({
  imports: [MongoModuleMock],
  providers: [DevicesServiceMock],
  exports: [DevicesServiceMock],
})
export class DevicesMock {}
