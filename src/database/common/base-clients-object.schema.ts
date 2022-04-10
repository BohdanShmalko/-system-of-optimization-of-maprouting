import {Prop} from '@nestjs/mongoose';
import {Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';

export class BaseClientsObject {
    @Prop({ ref: ECollections.Clients, required: true })
    clientId: MongooseSchema.Types.ObjectId;
}
