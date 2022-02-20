import { Injectable } from '@nestjs/common';
import { UserRooms } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UserRoomsServiceMock implements UserRooms {
    constructor(private mongo : MongoService){}
}
