import { Module } from '@nestjs/common';
import { UserHistorysSchema, UserHistorys } from './user-history.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserHistorysService } from './user-history.service';

/**
* UserHistorys mongo module
* @name UserHistorysModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserHistorys.name, schema: UserHistorysSchema },
        ]),
    ],
    exports: [UserHistorysService],
    providers: [UserHistorysService],
})
export class UserHistorysModule {
}
