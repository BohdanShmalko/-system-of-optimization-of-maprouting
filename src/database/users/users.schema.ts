import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';
import { BaseClientsObject } from '../common/base-clients-object.schema';
import {EAlgorithms} from '../locations/locations.enum';

export type UsersDocument = Users & Document;

@Schema({collection: ECollections.Users, timestamps: true})
export class Users extends BaseClientsObject {
    @Prop({})
    externalId!: string;

    @Prop({ required: true, enum: EAlgorithms, default: EAlgorithms.FloydWarshall })
    algorithm!: string

    @Prop({ required: false, type: MongooseSchema.Types.Mixed })
    optionalParams!: any;
}

/**
* Users schema
* @name UsersSchema
* @kind class
*/
export const UsersSchema = SchemaFactory.createForClass(Users);
