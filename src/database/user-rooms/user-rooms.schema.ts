import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';
import { BaseUsersObject } from '../common/base-users-object.schema';

export type UserRoomsDocument = UserRooms & Document;

@Schema({ collection: ECollections.UserRooms, timestamps: true })
export class UserRooms extends BaseUsersObject {
    @Prop({ ref: ECollections.Rooms, required: true })
    roomId: MongooseSchema.Types.ObjectId;
}

/**
* UserRooms schema
* @name UserRoomsSchema
* @kind class
*/
export const UserRoomsSchema = SchemaFactory.createForClass(UserRooms);
