import { Injectable } from '@nestjs/common';
import { ErrorsService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class ErrorsServiceMock implements ErrorsService {
    constructor(private mongo : MongoService){}
}
