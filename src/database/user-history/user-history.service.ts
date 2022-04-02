import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLocations, UserLocationsDocument } from './user-history.schema';

/**
* UserLocationsService database service
* @name UserLocationsService
* @kind class
*/
@Injectable()
export class UserLocationsService {
    constructor(
        @InjectModel(UserLocations.name)
        protected model: Model<UserLocationsDocument>,
    ) {
    }
}
