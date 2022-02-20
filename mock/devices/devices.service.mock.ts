import { Injectable } from '@nestjs/common';
import { Devices } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class DevicesServiceMock implements Devices {
    constructor(private mongo : MongoService){}
}
