import { AuthModule } from '@common/index';
import { Module } from '@nestjs/common';
import { ErrorController } from './error.controller';
import { ErrorService } from './error.service';

/**
* Error module
* @name ErrorModule
* @kind module
*/
@Module({
  imports: [AuthModule],
  controllers: [ErrorController],
  providers: [ErrorService],
})
export class ErrorModule {}
