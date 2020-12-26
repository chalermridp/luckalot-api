import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { SanookService } from './sanook/sanook.service';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService, SanookService],
})
export class ResultsModule {}
