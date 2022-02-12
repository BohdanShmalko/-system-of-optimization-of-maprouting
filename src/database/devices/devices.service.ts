import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Devices, DevicesDocument } from './devices.schema';

/**
* DevicesService database service
* @name DevicesService
* @kind class
*/
@Injectable()
export class DevicesService {
    constructor(
        @InjectModel(Devices.name)
        protected model: Model<DevicesDocument>,
    ) {
    }
}
