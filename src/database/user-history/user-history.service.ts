import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonDbService } from '../common/common-db-funcs';
import { UserHistorys, UserHistorysDocument } from './user-history.schema';

/**
* UserHistorysService database service
* @name UserHistorysService
* @kind class
*/
@Injectable()
export class UserHistorysService extends CommonDbService {
    constructor(
        @InjectModel(UserHistorys.name)
        protected model: Model<UserHistorysDocument>,
    ) {
        super(model);
    }

    create(dto: UserHistorys): Promise<UserHistorys> {
        return this.model.create(dto);
    }
}
