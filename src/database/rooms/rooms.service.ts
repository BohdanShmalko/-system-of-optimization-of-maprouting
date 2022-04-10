import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Rooms, RoomsDocument } from './rooms.schema';

/**
* RoomsService database service
* @name RoomsService
* @kind class
*/
@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Rooms.name)
        protected model: Model<RoomsDocument>,
    ) {
    }

    async create(dto: Rooms): Promise<Rooms> {
        return this.model.create(dto);
    }

    async findById(_id: string | ObjectId) {
        return this.model.findOne({ _id });
    }
}
