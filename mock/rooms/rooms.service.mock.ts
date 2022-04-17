import { Injectable } from '@nestjs/common';
import { Rooms, RoomsService as RoomsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { Schema, Document } from 'mongoose';

@Injectable()
//@ts-ignore
export class RoomsService implements RoomsServiceReal {
    constructor(private mongo : MongoService){}
    create(dto: Rooms): Promise<Rooms> {
        const collection = this.mongo.rooms;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.rooms = collection;
        return newDoc as any;
    }
    findById(_id: string | Schema.Types.ObjectId): Promise<Rooms & Document<any, any, any> & { _id: any; }> {
        return this.mongo.rooms.find(doc => doc._id === _id); 
    }
}
