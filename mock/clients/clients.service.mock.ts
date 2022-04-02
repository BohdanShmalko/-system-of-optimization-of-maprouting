import { Injectable } from '@nestjs/common';
import { Clients } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class ClientsServiceMock implements Clients {
    constructor(private mongo : MongoService){}
}
