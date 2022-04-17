import { Injectable } from '@nestjs/common';
import { Errors, ErrorsService as ErrorsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema } from 'mongoose';

@Injectable()
//@ts-ignore
export class ErrorsService implements ErrorsServiceReal {
    constructor(private mongo : MongoService){}
    create(dto: Errors): Promise<Errors> {
        const collection = this.mongo.errors;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.errors = collection;
        return newDoc as any;
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.errors;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.errors;
        this.mongo.errors = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.errors;
        this.mongo.errors = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return this.mongo.errors.find(doc => doc._id === _id);
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.errors.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.errors;
        this.mongo.errors = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
