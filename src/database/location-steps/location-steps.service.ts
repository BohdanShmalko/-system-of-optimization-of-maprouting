import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
