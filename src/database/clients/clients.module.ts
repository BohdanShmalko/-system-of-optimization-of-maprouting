import { Module } from '@nestjs/common';
import { Clients, ClientsSchema } from './clients.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsService } from './clients.service';

/**
* Clients mongo module
* @name ClientsModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Clients.name, schema: ClientsSchema },
        ]),
    ],
    exports: [ClientsService],
    providers: [ClientsService],
})
export class ClientsModule {
}
