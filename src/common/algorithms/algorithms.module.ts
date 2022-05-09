import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { FloydWarshallService } from './floyd-warshall.service';
import { BellmanFordService } from './bellman-ford.service';

/**
* Algorithms module
* @name AlgorithmsModule
* @kind module
*/
@Module({
  imports: [HttpModule],
  providers: [AlgorithmsService, FloydWarshallService, BellmanFordService],
  exports: [AlgorithmsService, FloydWarshallService, BellmanFordService],
})
export class AlgorithmsModule {}
