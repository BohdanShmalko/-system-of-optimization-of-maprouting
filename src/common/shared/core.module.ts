import { Module } from '@nestjs/common';
import { CoreService } from './core.service';

/**
* Core module
* @name CoreModule
* @kind module
*/
@Module({
  imports: [CoreService],
  providers: [],
})
export class CoreModule {}
