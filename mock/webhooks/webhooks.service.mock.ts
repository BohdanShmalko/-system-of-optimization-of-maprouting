import { Injectable } from '@nestjs/common';
import { WebHooks, WebHooksService as WebHooksServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class WebhooksService implements WebHooksServiceReal {
    constructor(private mongo : MongoService){}
    findByUrlEventClient({ url, event, clientId }: { url: any; event: any; clientId: any; }): Promise<WebHooks> {
        return this.mongo.webhooks.find(doc => doc.url === url && doc.clientId === clientId && doc.event === event);
    }
    updateById(_id: string | Schema.Types.ObjectId, document: any): Promise<WebHooks> {
        const collection = this.mongo.webhooks;
        this.mongo.webhooks = collection.map(doc => {
            if(doc._id === _id) return { ...doc, ...document };
            return doc;
        });
        return this.mongo.webhooks.find(doc => doc._id === _id);
    }
    create(dto: WebHooks): Promise<WebHooks> {
        const collection = this.mongo.webhooks;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.webhooks = collection;
        return newDoc as any;
    }
    findById(_id: string | Schema.Types.ObjectId): Promise<WebHooks> {
        return this.mongo.webhooks.find(doc => doc._id === _id);
    }
    findByEventClient(clientId: string | Schema.Types.ObjectId, event: string): Promise<WebHooks[]> {
        return this.mongo.webhooks.find(doc => doc.clientId === clientId && doc.event === event);
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.webhooks;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.webhooks;
        this.mongo.webhooks = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.webhooks;
        this.mongo.webhooks = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.webhooks.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.webhooks;
        this.mongo.webhooks = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
