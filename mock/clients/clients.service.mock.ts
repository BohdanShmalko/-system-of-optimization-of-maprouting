import { Injectable } from '@nestjs/common';
import { Clients, ClientsDocument, ClientsService as ClientsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Query, Document, Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class ClientsService implements ClientsServiceReal {
    constructor(private mongo : MongoService){}
    public findByApiKey(apiKey: string): Query<Clients & Document<any, any, any> & { _id: any; }, Clients & Document<any, any, any> & { _id: any; }, {}, ClientsDocument> {
        return
    }
    public findByName(name: string): Query<Clients & Document<any, any, any> & { _id: any; }, Clients & Document<any, any, any> & { _id: any; }, {}, ClientsDocument> {
        return
    }
    public findById(_id: string): Query<Clients & Document<any, any, any> & { _id: any; }, Clients & Document<any, any, any> & { _id: any; }, {}, ClientsDocument> {
        return
    }
    public createNewClient(document: Clients): Promise<Clients & Document<any, any, any> & { _id: any; }> {
        return
    }
    public updateClientById(_id: string | Schema.Types.ObjectId, document: any): Promise<Clients> {
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
