import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';
import {ECollections} from '../collections.enum';
import { BaseClientsObject } from '../common/base-clients-object.schema';

export type WebHooksHistoryDocument = WebHooksHistory & Document;

@Schema({collection: ECollections.WebHooksHistory, timestamps: true})
export class WebHooksHistory extends BaseClientsObject {
    @Prop({ ref: ECollections.WebHooks, required: true })
    webhookId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, type: MongooseSchema.Types.Mixed })
    data: any;

    @Prop({ required: true })
    success: boolean;
}

/**
* WebHooksHistory schema
* @name WebHooksHistorySchema
* @kind class
*/
export const WebHooksHistorySchema = SchemaFactory.createForClass(WebHooksHistory);
