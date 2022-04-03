import { Injectable } from '@nestjs/common';
import { SuperAdminsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class SuperAdminsServiceMock implements SuperAdminsService {
    constructor(private mongo : MongoService){}
}
