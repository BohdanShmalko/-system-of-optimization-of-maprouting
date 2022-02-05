import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRooms, UserRoomsDocument } from './user-rooms.schema';

@Injectable()
export class UserRoomsService {
    constructor(
        @InjectModel(UserRooms.name)
        protected model: Model<UserRoomsDocument>,
    ) {
    }
}
