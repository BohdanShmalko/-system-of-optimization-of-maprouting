import { Injectable } from '@nestjs/common';
import { LocationStepsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class LocationStepsServiceMock implements LocationStepsService {
    constructor(private mongo : MongoService){}
}
