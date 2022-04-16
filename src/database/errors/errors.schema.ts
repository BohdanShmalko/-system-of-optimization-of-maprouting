import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections} from '../collections.enum';
import { BaseUsersObject } from '../common/base-users-object.schema';

export type ErrorsDocument = Errors & Document;

@Schema({ collection: ECollections.Errors, timestamps: true })
export class Errors extends BaseUsersObject {
    @Prop({ required: true })
    message: string;
}

/**
* Errors schema
* @name ErrorsSchema
* @kind class
*/
export const ErrorsSchema = SchemaFactory.createForClass(Errors);
