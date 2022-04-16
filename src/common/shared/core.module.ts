import { Module } from '@nestjs/common';
import { CoreService } from './core.service';

/**
* Core module
* @name CoreModule
* @kind module
*/
@Module({
  imports: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
