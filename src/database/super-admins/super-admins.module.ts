import { Module } from '@nestjs/common';
import { SuperAdmins, SuperAdminsSchema } from './super-admins.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperAdminsService } from './super-admins.service';

/**
* SuperAdmins mongo module
* @name SuperAdminsModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: SuperAdmins.name, schema: SuperAdmins },
        ]),
    ],
    exports: [SuperAdminsService],
    providers: [SuperAdminsService],
})
export class SuperAdminsModule {
}
