import { Module } from '@nestjs/common';
import { LocationsSchema, Locations } from './locations.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsService } from './locations.service';

/**
* Locations mongo module
* @name LocationsModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Locations.name, schema: LocationsSchema },
        ]),
    ],
    exports: [LocationsService],
    providers: [LocationsService],
})
export class LocationsModule {
}
