import { Module } from '@nestjs/common';
import { ResultFetchSchedulesService } from './result-fetch-schedules.service';
import { ResultFetchSchedulesController } from './result-fetch-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultFetchScheduleRepository } from './result-fetch-schedules.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultFetchScheduleRepository])],
  providers: [ResultFetchSchedulesService],
  controllers: [ResultFetchSchedulesController],
})
export class ResultFetchSchedulesModule {}
