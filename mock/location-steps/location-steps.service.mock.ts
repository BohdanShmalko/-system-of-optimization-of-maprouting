import { Injectable } from '@nestjs/common';
import { LocationSteps, LocationStepsDocument, LocationStepsService as LocationStepsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { Schema, Document } from 'mongoose';

@Injectable()
//@ts-ignore
export class LocationStepsService implements LocationStepsServiceReal {
    constructor(private mongo : MongoService){}
    findByLocationId(locationId: string | Schema.Types.ObjectId): Promise<(LocationSteps & Document<any, any, any> & { _id: any; })[]> {
        return this.mongo.location_steps.find(doc => doc.locationId === locationId);
    }
    create(dto: LocationSteps): Promise<LocationStepsDocument> {
        const collection = this.mongo.location_steps;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.location_steps = collection;
        return newDoc as any;
    }
    createMany(dtos: LocationSteps[]): Promise<(LocationSteps & Document<any, any, any> & { _id: any; })[]> {
        const collection = this.mongo.webhooks;
        const newDocs = dtos.map(dto => ({
            _id: this.mongo.newId(),
            ...dto,
        }));
        collection.push(...newDocs);
        this.mongo.webhooks = collection;
        return newDocs as any;
    }
}
