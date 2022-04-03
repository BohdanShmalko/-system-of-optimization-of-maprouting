import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebHooksHistory, WebHooksHistoryDocument } from './webhooks-history.schema';

/**
* WebHooksHistoryService database service
* @name WebHooksHistoryService
* @kind class
*/
@Injectable()
export class WebHooksHistoryService {
    constructor(
        @InjectModel(WebHooksHistory.name)
        protected model: Model<WebHooksHistoryDocument>,
    ) {
    }
}
