import { Module } from '@nestjs/common';
import { UserRoomsSchema, UserRooms } from './user-rooms.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRoomsService } from './user-rooms.service';

/**
* UserRooms mongo module
* @name UserRoomsModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserRooms.name, schema: UserRoomsSchema },
        ]),
    ],
    exports: [UserRoomsService],
    providers: [UserRoomsService],
})
export class UserRoomsModule {
}
