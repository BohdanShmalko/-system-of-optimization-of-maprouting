import { Injectable } from '@nestjs/common';
import { LocationsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class LocationsServiceMock implements LocationsService {
    constructor(private mongo : MongoService){}
}
