import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { LocationSteps, LocationStepsDocument } from './location-steps.schema';

/**
* LocationStepsService database service
* @name LocationStepsService
* @kind class
*/
@Injectable()
export class LocationStepsService {
    constructor(
        @InjectModel(LocationSteps.name)
        protected model: Model<LocationStepsDocument>,
    ) {
    }

    async findByLocationId(locationId: string | ObjectId) {
        const res = await this.model.find({ locationId }).sort({ step: -1 });
        return !res || !res?.length ? null : res;
    }

    async create(dto: LocationSteps): Promise<LocationStepsDocument> {
        return this.model.create(dto);
    }

    async createMany(dtos: LocationSteps[]) {
        return this.model.insertMany(dtos);
    }
}
