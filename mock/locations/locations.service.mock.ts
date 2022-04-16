import { Injectable } from '@nestjs/common';
import { Locations, LocationsDocument, LocationsService as LocationsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { Document } from 'mongoose';

@Injectable()
//@ts-ignore
export class LocationsService implements LocationsServiceReal {
    constructor(private mongo : MongoService){}
    findByDto(dto: any): Promise<Location & Document<any, any, any> & { _id: any; }> {
        return
    }
    create(dto: Locations): Promise<LocationsDocument> {
        return
    }
}
