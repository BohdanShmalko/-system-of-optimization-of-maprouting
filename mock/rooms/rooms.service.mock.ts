import { Injectable } from '@nestjs/common';
import { Rooms } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class RoomsServiceMock implements Rooms {
    constructor(private mongo : MongoService){}
}
