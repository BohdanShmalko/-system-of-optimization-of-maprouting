import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema} from 'mongoose';
import { ECollections} from '../collections.enum';

export type ErrorsDocument = Errors & Document;

@Schema({ collection: ECollections.Errors, timestamps: true })
export class Errors {
    @Prop({ ref: ECollections.Devices, required: true })
    deviceId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    message: string;
}

export const ErrorsSchema = SchemaFactory.createForClass(Errors);
