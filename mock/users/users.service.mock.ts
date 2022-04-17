import { Injectable } from '@nestjs/common';
import { Users, UsersDocument, UsersService as UsersServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class UsersService implements UsersServiceReal {
    constructor(private mongo : MongoService){}
    create(dto: Users): Promise<UsersDocument> {
        const collection = this.mongo.users;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.users = collection;
        return newDoc as any;
    }
    updateUserById(_id: string | Schema.Types.ObjectId, document: any): Promise<Users> {
        const collection = this.mongo.users;
        this.mongo.users = collection.map(doc => {
            if(doc._id === _id) return { ...doc, ...document };
            return doc;
        });
        return this.mongo.users.find(doc => doc._id === _id);
    }
    findByIdAndExternalId(_id: string | Schema.Types.ObjectId, externalId: string): Promise<Users> {
        return this.mongo.users.find(doc => doc._id === _id && doc.externalId === externalId);
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.users;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.users;
        this.mongo.users = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.users;
        this.mongo.users = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return this.mongo.users.find(doc => doc._id === _id);
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.users.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.users;
        this.mongo.users = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
