import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
