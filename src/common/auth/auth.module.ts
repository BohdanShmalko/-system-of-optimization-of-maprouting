import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { SuperAdminsModule, ClientsModule } from '@db/index';

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
    exports: [AuthService, JwtModule],
})
export class AuthModule {
}
