import { CommonDbService } from '../common/common-db-funcs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { WebHooks, WebHooksDocument } from './webhooks.schema';

/**
* WebHooks database service
* @name WebHooks
* @kind class
*/
@Injectable()
export class WebHooksService extends CommonDbService {
    constructor(
        @InjectModel(WebHooks.name)
        protected model: Model<WebHooksDocument>,
    ) {
        super(model);
    }

    async findByUrlEventClient({ url, event, clientId }): Promise<WebHooks | null> {
        return this.model.findOne({ url, event, clientId });
    }

    async updateById(_id: string | ObjectId, document): Promise<WebHooks> {
        return this.model.findOneAndUpdate({ _id }, { $set: document }, { returnOriginal: false });
    }

    async create(dto: WebHooks): Promise<WebHooks> {
        return this.model.create(dto);
    }

    async findById(_id: string | ObjectId): Promise<WebHooks | null> {
        return this.model.findOne({ _id });
    }

    async findByEventClient(clientId: string | ObjectId, event: string): Promise<WebHooks[]> {
        return this.model.find({ clientId, event });
    }
}
