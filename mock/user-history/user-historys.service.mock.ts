import { Injectable } from '@nestjs/common';
import { UserHistorysService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class UserHistorysServiceMock implements UserHistorysService {
    constructor(private mongo : MongoService){}
}
