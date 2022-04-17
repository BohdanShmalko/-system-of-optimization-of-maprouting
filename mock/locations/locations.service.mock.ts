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
        return this.mongo.locations.find(doc => {
            const keys = Object.keys(dto);
            const condition = keys.reduce((acc, cur) => acc && dto[cur] === doc[cur], true);
            return condition;
        });
    }
    create(dto: Locations): Promise<LocationsDocument> {
        const collection = this.mongo.locations;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.locations = collection;
        return newDoc as any;
    }
}
