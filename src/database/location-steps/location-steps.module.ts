import { Module } from '@nestjs/common';
import { LocationStepsSchema, LocationSteps } from './location-steps.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationStepsService } from './location-steps.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: LocationSteps.name, schema: LocationStepsSchema },
        ]),
    ],
    exports: [LocationStepsService],
    providers: [LocationStepsService],
})
export class LocationStepsModule {
}
