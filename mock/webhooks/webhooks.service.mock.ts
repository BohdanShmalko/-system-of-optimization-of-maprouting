import { Injectable } from '@nestjs/common';
import { WebHooksService } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';

@Injectable()
//@ts-ignore
export class WebhooksServiceMock implements WebHooksService {
    constructor(private mongo : MongoService){}
}
