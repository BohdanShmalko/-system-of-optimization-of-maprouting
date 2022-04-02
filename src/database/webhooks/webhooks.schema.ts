import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections} from '../collections.enum';

export type WebHooksDocument = WebHooks & Document;

@Schema({ collection: ECollections.WebHooks, timestamps: true })
export class WebHooks {
    @Prop({ ref: ECollections.Clients, required: true })
    clientId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    url: string;

    @Prop({ required: true })
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
