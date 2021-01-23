import { Module } from '@nestjs/common';
import { ResultImportSchedulesService } from './result-import-schedules.service';
import { ResultImportSchedulesController } from './result-import-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultImportScheduleRepository } from './result-import-schedules.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultImportScheduleRepository])],
  providers: [ResultImportSchedulesService],
  controllers: [ResultImportSchedulesController],
})
export class ResultImportSchedulesModule {}
