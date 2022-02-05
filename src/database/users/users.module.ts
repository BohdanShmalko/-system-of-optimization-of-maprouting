import {Module} from '@nestjs/common';
import {Users, UsersSchema} from './users.schema';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersService} from './users.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Users.name, schema: UsersSchema},
        ]),
    ],
    exports: [UsersService],
    providers: [UsersService],
})
export class UsersModule {
}
