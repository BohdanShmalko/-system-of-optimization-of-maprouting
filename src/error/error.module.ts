import { CoreModule } from '@common';
import { ErrorsModule } from '@db';
import { Module } from '@nestjs/common';
import { ErrorController } from './error.controller';
import { ErrorService } from './error.service';

/**
* Error module
* @name ErrorModule
* @kind module
*/
@Module({
  imports: [
    ErrorsModule,
    CoreModule,
  ],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}
