import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Locations, LocationsDocument } from './locations.schema';

@Injectable()
export class LocationsService {
    constructor(
        @InjectModel(Locations.name)
        protected model: Model<LocationsDocument>,
    ) {
    }
}
