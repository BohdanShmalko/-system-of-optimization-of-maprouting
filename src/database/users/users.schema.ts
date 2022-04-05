import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';
import {EAlgorithms} from '../locations/locations.enum';

export type UsersDocument = Users & Document;

@Schema({collection: ECollections.Users, timestamps: true})
export class Users {
    @Prop({ ref: ECollections.Users, required: true })
    clientId: MongooseSchema.Types.ObjectId;

    @Prop({ ref: ECollections.Users, required: false })
    externalId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, enum: EAlgorithms, default: EAlgorithms.BipartiteSubset })
    algorithm: string

    @Prop({ required: false })
    optionalParams: MongooseSchema.Types.Mixed;
}

/**
* Users schema
* @name UsersSchema
* @kind class
*/
export const UsersSchema = SchemaFactory.createForClass(Users);
