import { Injectable } from '@nestjs/common';
import { SuperAdmins } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class SuperAdminsServiceMock implements SuperAdmins {
    constructor(private mongo : MongoService){}
}
