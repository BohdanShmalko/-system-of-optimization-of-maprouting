import { Module } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';
import { BipartiteSubsetsService } from './bipartite-subset.service';

/**
* Algorithms module
* @name AlgorithmsModule
* @kind module
*/
@Module({
  imports: [],
  providers: [AlgorithmsService, BipartiteSubsetsService],
  exports: [AlgorithmsService, BipartiteSubsetsService],
})
export class AlgorithmsModule {}
