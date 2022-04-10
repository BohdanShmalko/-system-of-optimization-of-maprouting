import {Prop} from '@nestjs/mongoose';
import {Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';
import { BaseClientsObject } from './base-clients-object.schema';

export class BaseUsersObject extends BaseClientsObject {
    @Prop({ ref: ECollections.Users, required: true })
    userId: MongooseSchema.Types.ObjectId;
}
