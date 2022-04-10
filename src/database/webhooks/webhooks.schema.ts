import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections} from '../collections.enum';
import { BaseClientsObject } from '../common/base-clients-object.schema';
import { EWebhookEvents } from './webhook-events.enum';

export type WebHooksDocument = WebHooks & Document;

@Schema({ collection: ECollections.WebHooks, timestamps: true })
export class WebHooks extends BaseClientsObject {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true, enum: EWebhookEvents })
    event: string;

    @Prop({ required: true })
    name: string;
}

/**
* WebHooks schema
* @name WebHooksSchema
* @kind class
*/
export const WebHooksSchema = SchemaFactory.createForClass(WebHooks);
