import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';
import { BaseUsersObject } from '../common/base-users-object.schema';

export type UserHistorysDocument = UserHistorys & Document;

@Schema({ collection: ECollections.UserHistory, timestamps: true })
export class UserHistorys extends BaseUsersObject {
    @Prop({ required: true })
    lat: string;

    @Prop({ required: true })
    lon: string;

    @Prop({ required: true })
    time: number;
}

/**
* UserHistorys schema
* @name UserHistorysSchema
* @kind class
*/
export const UserHistorysSchema = SchemaFactory.createForClass(UserHistorys);
