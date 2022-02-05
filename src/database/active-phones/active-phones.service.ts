import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivePhones, ActivePhonesDocument } from './active-phones.schema';

@Injectable()
export class ActivePhonesService {
    constructor(
        @InjectModel(ActivePhones.name)
        protected model: Model<ActivePhonesDocument>,
    ) {
    }
}
