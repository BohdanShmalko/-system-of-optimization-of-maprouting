import { Injectable } from '@nestjs/common';
import { Locations } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class LocationsServiceMock implements Locations {
    constructor(private mongo : MongoService){}
}
