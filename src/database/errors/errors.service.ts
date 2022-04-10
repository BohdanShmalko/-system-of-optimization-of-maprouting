import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonDbService } from '../common/common-db-funcs';
import { Errors, ErrorsDocument } from './errors.schema';

/**
* ErrorsService database service
* @name ErrorsService
* @kind class
*/
@Injectable()
export class ErrorsService extends CommonDbService {
    constructor(
        @InjectModel(Errors.name)
        protected model: Model<ErrorsDocument>,
    ) {
        super(model);
    }

    async create(dto: Errors): Promise<Errors> {
        return this.model.create(dto);
    }
}
