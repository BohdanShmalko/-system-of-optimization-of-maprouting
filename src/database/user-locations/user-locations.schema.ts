import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';

export type UserLocationsDocument = UserLocations & Document;

@Schema({ collection: ECollections.UserLocations, timestamps: true })
export class UserLocations {
    @Prop({ ref: ECollections.Users, required: true })
    userId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    lat: string;

    @Prop({ required: true })
    lon: string;

    @Prop({ required: true })
    time: number;
}

/**
* UserLocations schema
* @name UserLocationsSchema
* @kind class
*/
export const UserLocationsSchema = SchemaFactory.createForClass(UserLocations);
