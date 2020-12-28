import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultTypeSanookRowNumberRepository } from './result-types.sanook-row-number.repository';
import { ResultTypesSanookRowNumberService } from './result-types.sanook-row-number.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultTypeSanookRowNumberRepository])],
  providers: [ResultTypesSanookRowNumberService],
  exports: [ResultTypesSanookRowNumberService],
})
export class ResultTypeSanookRowNumberModule {}
