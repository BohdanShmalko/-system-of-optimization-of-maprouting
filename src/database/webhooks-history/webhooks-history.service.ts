import { CommonDbService } from '../common/common-db-funcs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { WebHooksHistory, WebHooksHistoryDocument } from './webhooks-history.schema';

/**
* WebHooksHistoryService database service
* @name WebHooksHistoryService
* @kind class
*/
@Injectable()
export class WebHooksHistoryService extends CommonDbService {
    constructor(
        @InjectModel(WebHooksHistory.name)
        protected model: Model<WebHooksHistoryDocument>,
    ) {
        super(model)
    }

    async deleteByWebhookId(webhookId: string | ObjectId) {
        return this.model.deleteMany({ webhookId });
    }

    async updateById(_id: string | ObjectId, document): Promise<WebHooksHistory> {
        return await this.model.findOneAndUpdate({ _id }, { $set: document }, { returnOriginal: false });
    }

    async create(dto: WebHooksHistory): Promise<WebHooksHistory> {
        return this.model.create(dto);
    }
}
