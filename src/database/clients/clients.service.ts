import { ISearch } from '@common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CommonDbService } from '../common/common-db-funcs';
import { Clients, ClientsDocument } from './clients.schema';

/**
* ClientsService database service
* @name ClientsService
* @kind class
*/
@Injectable()
export class ClientsService extends CommonDbService {
    constructor(
        @InjectModel(Clients.name)
        protected model: Model<ClientsDocument>,
    ) {
        super(model);
    }

    public findByApiKey(apiKey: string) {
        return this.model.findOne({ apiKey });
    }

    public findByName(name: string) {
        return this.model.findOne({ name });
    }

    public findById(_id: string) {
        return this.model.findOne({ _id });
    }

    public createNewClient(document: Clients) {
        return this.model.create(document);
    } 

    public async updateClientById(_id: string | ObjectId, document): Promise<Clients | null> {
        return this.model.findOneAndUpdate({ _id }, { $set: document }, { returnOriginal: false });
    }
}
