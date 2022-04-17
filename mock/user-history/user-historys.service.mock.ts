import { Injectable } from '@nestjs/common';
import { UserHistorys, UserHistorysService as UserHistorysServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class UserHistorysService implements UserHistorysServiceReal {
    constructor(private mongo : MongoService){}
    create(dto: UserHistorys): Promise<UserHistorys> {
        const collection = this.mongo.user_history;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.user_history = collection;
        return newDoc as any;
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.user_history;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.user_history;
        this.mongo.user_history = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.user_history;
        this.mongo.user_history = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return this.mongo.user_history.find(doc => doc._id === _id);
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.user_history.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.user_history;
        this.mongo.user_history = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
