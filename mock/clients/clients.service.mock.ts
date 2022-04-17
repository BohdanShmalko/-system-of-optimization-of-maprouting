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
        return this.mongo.clients.find(doc => doc.apiKey === apiKey);
    }
    public findByName(name: string): Query<Clients & Document<any, any, any> & { _id: any; }, Clients & Document<any, any, any> & { _id: any; }, {}, ClientsDocument> {
        return this.mongo.clients.find(doc => doc.name === name);
    }
    public findById(_id: string): Query<Clients & Document<any, any, any> & { _id: any; }, Clients & Document<any, any, any> & { _id: any; }, {}, ClientsDocument> {
        return this.mongo.clients.find(doc => doc._id === _id);
    }
    public createNewClient(document: Clients): Promise<Clients & Document<any, any, any> & { _id: any; }> {
        const collection = this.mongo.clients;
        const newDoc = {
            _id: this.mongo.newId(),
            ...document,
        }
        collection.push(newDoc);
        this.mongo.clients = collection;
        return newDoc as any;
    }
    public updateClientById(_id: string | Schema.Types.ObjectId, document: any): Promise<Clients> {
        const collection = this.mongo.clients;
        this.mongo.clients = collection.map(doc => {
            if(doc._id === _id) return { ...doc, ...document };
            return doc;
        });
        return this.mongo.clients.find(doc => doc._id === _id);
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.clients;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.clients;
        this.mongo.clients = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.clients;
        this.mongo.clients = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.clients.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.clients;
        this.mongo.clients = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
