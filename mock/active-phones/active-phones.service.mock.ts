import { Injectable } from '@nestjs/common';
import { ActivePhones } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class ActivePhonesServiceMock implements ActivePhones {
    constructor(private mongo : MongoService){}
}
