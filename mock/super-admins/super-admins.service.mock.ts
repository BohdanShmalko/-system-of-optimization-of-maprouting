import { Injectable } from '@nestjs/common';
import { SuperAdmins, SuperAdminsDocument, SuperAdminsService as SuperAdminsServiceReal } from '@db';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { Query, Document } from 'mongoose';

@Injectable()
//@ts-ignore
export class SuperAdminsService implements SuperAdminsServiceReal {
    constructor(private mongo : MongoService){}
    public findByApiKey(apiKey: string): Query<SuperAdmins & Document<any, any, any> & { _id: any; }, SuperAdmins & Document<any, any, any> & { _id: any; }, {}, SuperAdminsDocument> {
        return
    }
}
