import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CommonDbService } from '../common/common-db-funcs';
import { UserRooms, UserRoomsDocument } from './user-rooms.schema';

/**
* UserRoomsService database service
* @name UserRoomsService
* @kind class
*/
@Injectable()
export class UserRoomsService extends CommonDbService {
    constructor(
        @InjectModel(UserRooms.name)
        protected model: Model<UserRoomsDocument>,
    ) {
        super(model);
    }

    async getAllUsersRoomsByUserId(userId: string | ObjectId) {
        return this.model.find({ userId });
    }

    async create(dto: UserRooms): Promise<UserRooms> {
        return this.model.create(dto);
    }

    async deleteByUserIdAndRoomId(userId: string | ObjectId, roomId: string | ObjectId) {
        return this.model.deleteOne({ userId, roomId });
    }
}
