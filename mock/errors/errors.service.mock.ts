import { Injectable } from '@nestjs/common';
import { Errors } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class ErrorsServiceMock implements Errors {
    constructor(private mongo : MongoService){}
}
