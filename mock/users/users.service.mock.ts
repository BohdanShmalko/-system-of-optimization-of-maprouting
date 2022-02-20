import { Injectable } from '@nestjs/common';
import { Users } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UsersServiceMock implements Users {
    constructor(private mongo : MongoService){}
}
