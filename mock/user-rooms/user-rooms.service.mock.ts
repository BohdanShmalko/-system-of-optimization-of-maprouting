import { Injectable } from '@nestjs/common';
import { UserRoomsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UserRoomsServiceMock implements UserRoomsService {
    constructor(private mongo : MongoService){}
}
