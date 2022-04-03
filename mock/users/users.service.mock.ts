import { Injectable } from '@nestjs/common';
import { UsersService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UsersServiceMock implements UsersService {
    constructor(private mongo : MongoService){}
}
