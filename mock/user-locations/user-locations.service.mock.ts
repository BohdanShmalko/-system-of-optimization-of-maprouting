import { Injectable } from '@nestjs/common';
import { UserLocations } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UserLocationsServiceMock implements UserLocations {
    constructor(private mongo : MongoService){}
}
