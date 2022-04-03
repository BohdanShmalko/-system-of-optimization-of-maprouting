import { Injectable } from '@nestjs/common';
import { WebHooksHistoryService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class WebhooksHistoryServiceMock implements WebHooksHistoryService {
    constructor(private mongo : MongoService){}
}
