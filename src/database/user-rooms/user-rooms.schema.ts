import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';

export type UserRoomsDocument = UserRooms & Document;

@Schema({ collection: ECollections.UserRooms, timestamps: true })
export class UserRooms {
    @Prop({ ref: ECollections.Users, required: true })
    userId: MongooseSchema.Types.ObjectId;

    @Prop({ ref: ECollections.Rooms, required: true })
    roomId: MongooseSchema.Types.ObjectId;
}

/**
* UserRooms schema
* @name UserRoomsSchema
* @kind class
*/
export const UserRoomsSchema = SchemaFactory.createForClass(UserRooms);
