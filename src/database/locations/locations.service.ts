import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Locations, LocationsDocument } from './locations.schema';

/**
* LocationsService database service
* @name LocationsService
* @kind class
*/
@Injectable()
export class LocationsService {
    constructor(
        @InjectModel(Locations.name)
        protected model: Model<LocationsDocument>,
    ) {
    }

    async findByDto(dto) {
        const res = await this.model.find(dto).sort({ _id: -1 }).limit(1);
        return !res || !res?.length ? null : res[0];
    }

    async create(dto: Locations): Promise<LocationsDocument> {
        return this.model.create(dto);
    }
}
