import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';

export type WebHooksHistoryDocument = WebHooksHistory & Document;

@Schema({collection: ECollections.WebHooksHistory, timestamps: true})
export class WebHooksHistory {
    @Prop({ ref: ECollections.WebHooks, required: true })
    webhookId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    data: MongooseSchema.Types.Mixed;
}

/**
* WebHooksHistory schema
* @name WebHooksHistorySchema
* @kind class
*/
export const WebHooksHistorySchema = SchemaFactory.createForClass(WebHooksHistory);
