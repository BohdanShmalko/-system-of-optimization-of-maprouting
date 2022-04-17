import { Injectable } from '@nestjs/common';
import { WebHooksHistory, WebHooksHistoryService as WebHooksHistoryServiceReal } from '@db';
import { DeleteResult, ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class WebhooksHistoryService implements WebHooksHistoryServiceReal {
    constructor(private mongo : MongoService){}
    deleteByWebhookId(webhookId: string | Schema.Types.ObjectId): Promise<DeleteResult> {
        const collection = this.mongo.webhooks_history;
        this.mongo.webhooks_history = collection.filter((doc) => doc.webhookId !== webhookId);
        return 
    }
    updateById(_id: string | Schema.Types.ObjectId, document: any): Promise<WebHooksHistory> {
        const collection = this.mongo.webhooks_history;
        this.mongo.webhooks_history = collection.map(doc => {
            if(doc._id === _id) return { ...doc, ...document };
            return doc;
        });
        return this.mongo.webhooks_history.find(doc => doc._id === _id);
    }
    create(dto: WebHooksHistory): Promise<WebHooksHistory> {
        const collection = this.mongo.webhooks_history;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.webhooks_history = collection;
        return newDoc as any;
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.webhooks_history;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.webhooks_history;
        this.mongo.webhooks_history = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.webhooks_history;
        this.mongo.webhooks_history = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return this.mongo.webhooks_history.find(doc => doc._id === _id);
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.webhooks_history.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.webhooks_history;
        this.mongo.webhooks_history = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
