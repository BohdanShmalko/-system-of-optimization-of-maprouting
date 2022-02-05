import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ECollections } from '../collections.enum';

export type ActivePhonesDocument = ActivePhones & Document;

@Schema({ collection: ECollections.ActivePhones, timestamps: true })
export class ActivePhones {
    @Prop({ required: true })
    updated: number

    @Prop({ required: true })
    archived: boolean

    @Prop({ required: true })
    phone: string

    @Prop({ required: true })
    code: string
}

export const ActivePhonesSchema = SchemaFactory.createForClass(ActivePhones);
