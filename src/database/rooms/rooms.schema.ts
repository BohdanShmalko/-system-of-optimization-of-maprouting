import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';

export type RoomsDocument = Rooms & Document;

@Schema({ collection: ECollections.Rooms, timestamps: true })
export class Rooms {
    @Prop({ required: true, default: true })
    twoUsers: boolean;
}

export const RoomsSchema = SchemaFactory.createForClass(Rooms);
