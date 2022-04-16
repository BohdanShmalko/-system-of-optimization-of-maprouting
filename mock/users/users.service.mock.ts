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
        return
    }
    updateUserById(_id: string | Schema.Types.ObjectId, document: any): Promise<Users> {
        return
    }
    findByIdAndExternalId(_id: string | Schema.Types.ObjectId, externalId: string): Promise<Users> {
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
