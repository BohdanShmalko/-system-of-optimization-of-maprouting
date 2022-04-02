import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuperAdmins, SuperAdminsDocument } from './super-admins.schema';

/**
* SuperAdminsService database service
* @name SuperAdminsService
* @kind class
*/
@Injectable()
export class SuperAdminsService {
    constructor(
        @InjectModel(SuperAdmins.name)
        protected model: Model<SuperAdminsDocument>,
    ) {}

    public findByApiKey(apiKey: string) {
        return this.model.findOne({ apiKey });
    }
}
