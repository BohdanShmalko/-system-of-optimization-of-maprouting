import { Injectable } from '@nestjs/common';
import { ClientsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class ClientsServiceMock implements ClientsService {
    constructor(private mongo : MongoService){}
}
