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
        return
    }
    create(dto: LocationSteps): Promise<LocationStepsDocument> {
        return
    }
    createMany(dtos: LocationSteps[]): Promise<(LocationSteps & Document<any, any, any> & { _id: any; })[]> {
        return
    }
}
