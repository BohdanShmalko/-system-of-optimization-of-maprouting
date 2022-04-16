import { Injectable } from '@nestjs/common';
import { UserRooms, UserRoomsService as UserRoomsServiceReal } from '@db';
import { DeleteResult, ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service.mock';
import { ISearch } from '@common';
import { Schema, Document } from 'mongoose';

@Injectable()
//@ts-ignore
export class UserRoomsService implements UserRoomsServiceReal {
    constructor(private mongo : MongoService){}
    getAllUsersRoomsByUserId(userId: string | Schema.Types.ObjectId): Promise<(UserRooms & Document<any, any, any> & { _id: any; })[]> {
        return
    }
    create(dto: UserRooms): Promise<UserRooms> {
        return
    }
    deleteByUserIdAndRoomId(userId: string | Schema.Types.ObjectId, roomId: string | Schema.Types.ObjectId): Promise<DeleteResult> {
        return
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        return
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        return
    }
    createWatcher() {
        return
    }
}
