import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Errors, ErrorsDocument } from './errors.schema';

/**
* ErrorsService database service
* @name ErrorsService
* @kind class
*/
@Injectable()
export class ErrorsService {
    constructor(
        @InjectModel(Errors.name)
        protected model: Model<ErrorsDocument>,
    ) {
    }
}
