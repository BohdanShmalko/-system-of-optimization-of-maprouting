import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, ObjectId} from 'mongoose';
import { CommonDbService } from '../common/common-db-funcs';
import {Users, UsersDocument} from './users.schema';

/**
* UsersService database service
* @name UsersService
* @kind class
*/
@Injectable()
export class UsersService extends CommonDbService {
    constructor(
        @InjectModel(Users.name)
        protected model: Model<UsersDocument>,
    ) {
        super(model);
    }

    create(dto: Users): Promise<Users> {
        return this.model.create(dto);
    }

    async updateUserById(_id: string | ObjectId, document): Promise<Users> {
        const res = (await this.model.updateOne({ _id }, { $set: document }, { upsert: true })) as any;
        return res;
    }

    async findByIdAndExternalId(_id: string | ObjectId, externalId: string): Promise<Users | null> {
        return this.model.findOne({ _id, externalId });
    }
}
