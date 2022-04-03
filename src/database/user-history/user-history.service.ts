import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserHistorys, UserHistorysDocument } from './user-history.schema';

/**
* UserHistorysService database service
* @name UserHistorysService
* @kind class
*/
@Injectable()
export class UserHistorysService {
    constructor(
        @InjectModel(UserHistorys.name)
        protected model: Model<UserHistorysDocument>,
    ) {
    }
}
