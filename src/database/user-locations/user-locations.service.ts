import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLocations, UserLocationsDocument } from './user-locations.schema';

@Injectable()
export class UserLocationsService {
    constructor(
        @InjectModel(UserLocations.name)
        protected model: Model<UserLocationsDocument>,
    ) {
    }
}
