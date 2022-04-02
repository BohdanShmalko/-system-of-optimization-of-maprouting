import { Injectable } from '@nestjs/common';
import { WebHooks } from '@db/index';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class WebhooksServiceMock implements WebHooks {
    constructor(private mongo : MongoService){}
}
