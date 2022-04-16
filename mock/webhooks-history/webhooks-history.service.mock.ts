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
        return
    }
    updateById(_id: string | Schema.Types.ObjectId, document: any): Promise<WebHooksHistory> {
        return
    }
    create(dto: WebHooksHistory): Promise<WebHooksHistory> {
        return
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        return
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        return
    }
    createWatcher() {
        return
    }
}
