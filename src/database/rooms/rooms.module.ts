import { Module } from '@nestjs/common';
import { RoomsSchema, Rooms } from './rooms.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsService } from './rooms.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Rooms.name, schema: RoomsSchema },
        ]),
    ],
    exports: [RoomsService],
    providers: [RoomsService],
})
export class RoomsModule {
}
