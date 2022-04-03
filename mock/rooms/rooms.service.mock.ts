import { Injectable } from '@nestjs/common';
import { RoomsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class RoomsServiceMock implements RoomsService {
    constructor(private mongo : MongoService){}
}
