import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ECollections } from '../collections.enum';

export type LocationStepsDocument = LocationSteps & Document;

@Schema({ collection: ECollections.LocationSteps, timestamps: true })
export class LocationSteps {
    @Prop({ ref: ECollections.Locations, required: true })
    locationId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    lat: string;

    @Prop({ required: true })
    lon: string;

    @Prop({ required: true })
    step: number;
}

/**
* LocationSteps schema
* @name LocationStepsSchema
* @kind class
*/
export const LocationStepsSchema = SchemaFactory.createForClass(LocationSteps);
