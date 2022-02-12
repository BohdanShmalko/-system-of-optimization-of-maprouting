import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Users, UsersDocument} from './users.schema';

/**
* UsersService database service
* @name UsersService
* @kind class
*/
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name)
        protected model: Model<UsersDocument>,
    ) {
    }
}
