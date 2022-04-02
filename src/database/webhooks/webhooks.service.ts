import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebHooks, WebHooksDocument } from './webhooks.schema';

/**
* WebHooks database service
* @name WebHooks
* @kind class
*/
@Injectable()
export class WebHooksService {
    constructor(
        @InjectModel(WebHooks.name)
        protected model: Model<WebHooksDocument>,
    ) {
    }
}
