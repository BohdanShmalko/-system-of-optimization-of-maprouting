import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Clients, ClientsDocument } from './clients.schema';

/**
* ClientsService database service
* @name ClientsService
* @kind class
*/
@Injectable()
export class ClientsService {
    constructor(
        @InjectModel(Clients.name)
        protected model: Model<ClientsDocument>,
    ) {}

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
        const res = (await this.model.updateOne({ _id }, { $set: document }, { upsert: true })) as any;
        return res;
    }

    public deleteById(_id: string | ObjectId) {
        return this.model.deleteOne({ _id });
    }
}
