import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { defaultAdmins } from './super-admins.dataset';
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
    ) {
        for(const document of defaultAdmins) {
            this.model.create(document).catch(e => {});
        }
    }

    public findByApiKey(apiKey: string) {
        return this.model.findOne({ apiKey });
    }
}
