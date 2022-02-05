import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';
import {EAlgorithms} from '../locations/locations.enum';

export type UsersDocument = Users & Document;

@Schema({collection: ECollections.Users, timestamps: true})
export class Users {
    @Prop({required: true, index: true})
    phoneNumber: string;

    @Prop({default: false})
    confirmed: string;

    @Prop({ required: true, enum: EAlgorithms })
    algorithm: string
}

export const UsersSchema = SchemaFactory.createForClass(Users);
