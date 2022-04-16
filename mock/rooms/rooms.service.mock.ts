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
        return
    }
    findById(_id: string | Schema.Types.ObjectId): Promise<Rooms & Document<any, any, any> & { _id: any; }> {
        return
    }
}
