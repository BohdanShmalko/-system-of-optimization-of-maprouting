import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections} from '../collections.enum';

export type SuperAdminsDocument = SuperAdmins & Document;

@Schema({ collection: ECollections.SuperAdmins, timestamps: true })
export class SuperAdmins {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    apiKey: string;
}

/**
* SuperAdmins schema
* @name SuperAdminsSchema
* @kind class
*/
export const SuperAdminsSchema = SchemaFactory.createForClass(SuperAdmins);
