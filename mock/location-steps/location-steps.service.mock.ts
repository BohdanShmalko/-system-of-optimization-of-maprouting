import { Injectable } from '@nestjs/common';
import { LocationSteps } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class LocationStepsServiceMock implements LocationSteps {
    constructor(private mongo : MongoService){}
}
