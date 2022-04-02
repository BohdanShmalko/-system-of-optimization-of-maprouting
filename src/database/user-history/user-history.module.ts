import { Module } from '@nestjs/common';
import { UserLocationsSchema, UserLocations } from './user-history.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLocationsService } from './user-history.service';

/**
* UserLocations mongo module
* @name UserLocationsModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserLocations.name, schema: UserLocationsSchema },
        ]),
    ],
    exports: [UserLocationsService],
    providers: [UserLocationsService],
})
export class UserLocationsModule {
}
