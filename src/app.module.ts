import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RouteModule } from './route/route.module';
import { LocationModule } from './location/location.module';
import { ErrorModule } from './error/error.module';
import { WsModule } from './ws/ws.module';

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
    UserModule,
    RouteModule,
    LocationModule,
    ErrorModule,
    WsModule,
  ],
})
export class AppModule {}
