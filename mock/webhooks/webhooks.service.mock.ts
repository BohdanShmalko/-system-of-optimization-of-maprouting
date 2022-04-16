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
        return
    }
    updateById(_id: string | Schema.Types.ObjectId, document: any): Promise<WebHooks> {
        return
    }
    create(dto: WebHooks): Promise<WebHooks> {
        return
    }
    findById(_id: string | Schema.Types.ObjectId): Promise<WebHooks> {
        return
    }
    findByEventClient(clientId: string | Schema.Types.ObjectId, event: string): Promise<WebHooks[]> {
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
