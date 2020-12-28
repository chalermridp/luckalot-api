import { Module } from '@nestjs/common';
import { ResultTypeSanookRowNumberModule } from 'src/result-types/sanook/result-types.sanook-row-number.module';
import { ResultsSanookService } from './results.sanook.service';

@Module({
  imports: [ResultTypeSanookRowNumberModule],
  providers: [ResultsSanookService],
  exports: [ResultsSanookService],
})
export class ResultsSanookModule {}
