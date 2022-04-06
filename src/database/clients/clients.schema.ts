import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections } from '../collections.enum';

export type ClientsDocument = Clients & Document;

@Schema({ collection: ECollections.Clients, timestamps: true })
export class Clients {
    @Prop({ ref: ECollections.SuperAdmins, required: true })
    adminCreated: MongooseSchema.Types.ObjectId;

    @Prop({ ref: ECollections.SuperAdmins, required: true })
    adminUpdated: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true, unique: true })
    apiKey: string;
}

/**
* Clients schema
* @name ClientsSchema
* @kind class
*/
export const ClientsSchema = SchemaFactory.createForClass(Clients);
