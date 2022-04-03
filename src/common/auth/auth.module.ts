import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SuperAdminsModule, ClientsModule } from '@db';

/**
* Auth module
* @name AuthModule
* @kind module
*/
@Global()
@Module({
    imports: [
        ClientsModule,
        SuperAdminsModule,
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {
}
