import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { SuperAdminsApiModule } from './super-admins/super-admins.module';
import { LocationModule } from './location/location.module';
import { ErrorModule } from './error/error.module';
import { WebhookModule } from './webhooks/webhooks.module';
import { WsModule } from './ws/ws.module';
import { AuthModule } from '@common';

/**
* App module
* @name AppModule
* @kind module
*/
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, 'static'),
    }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    AuthModule,
    UserModule,
    LocationModule,
    ErrorModule,
    WsModule,
    SuperAdminsApiModule,
    WebhookModule,
  ],
})
export class AppModule {}
