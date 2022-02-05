import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RouteModule } from './route/route.module';
import { LocationModule } from './location/location.module';
import { ErrorModule } from './error/error.module';

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
  ],
})
export class AppModule {}
