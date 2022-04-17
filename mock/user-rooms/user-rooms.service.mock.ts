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
        return this.mongo.user_rooms.filter((doc) => doc.userId === userId) as any;
    }
    create(dto: UserRooms): Promise<UserRooms> {
        const collection = this.mongo.user_rooms;
        const newDoc = {
            _id: this.mongo.newId(),
            ...dto,
        }
        collection.push(newDoc);
        this.mongo.user_rooms = collection;
        return newDoc as any;
    }
    deleteByUserIdAndRoomId(userId: string | Schema.Types.ObjectId, roomId: string | Schema.Types.ObjectId): Promise<DeleteResult> {
        const collection = this.mongo.user_rooms;
        this.mongo.user_rooms = collection.filter((doc) => doc.userId !== userId && doc.roomId !== roomId);
        return
    }
    public search({ pipeline, sort, limit, skip, select }: ISearch) {
        const collection = this.mongo.user_rooms;
        return collection;
    }
    public deleteByUserId(userId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.user_rooms;
        this.mongo.user_rooms = collection.filter((doc) => doc.userId !== userId);
        return
    }
    public deleteByClientId(clientId: string | Schema.Types.ObjectId) {
        const collection = this.mongo.user_rooms;
        this.mongo.user_rooms = collection.filter((doc) => doc.clientId !== clientId);
        return
    }
    public findById(_id: string | Schema.Types.ObjectId) {
        return this.mongo.user_rooms.find(doc => doc._id === _id);
    }
    findByIdAndClient(_id: string | Schema.Types.ObjectId, clientId: string | Schema.Types.ObjectId): Promise<any> {
        return this.mongo.user_rooms.find(doc => doc._id === _id && doc.clientId === clientId);
    }
    deleteById(_id: string | Schema.Types.ObjectId): Promise<any> {
        const collection = this.mongo.user_rooms;
        this.mongo.user_rooms = collection.filter((doc) => doc._id !== _id);
        return
    }
    createWatcher() {
        return
    }
}
