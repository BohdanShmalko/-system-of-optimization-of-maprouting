import { Module } from '@nestjs/common';
import { UserLocationsSchema, UserLocations } from './user-locations.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLocationsService } from './user-locations.service';

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
