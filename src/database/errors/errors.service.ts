import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Errors, ErrorsDocument } from './errors.schema';

@Injectable()
export class ErrorsService {
    constructor(
        @InjectModel(Errors.name)
        protected model: Model<ErrorsDocument>,
    ) {
    }
}
