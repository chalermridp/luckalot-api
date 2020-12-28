import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { ResultsSanookModule } from './sanook/results.sanook.module';

@Module({
  imports: [ResultsSanookModule],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
