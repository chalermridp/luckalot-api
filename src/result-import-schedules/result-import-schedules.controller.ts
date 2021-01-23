import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { FilterResultImportScheduleDto } from './dto/filter-result-import-schedule.dto';
import { UpdateResultImportScheduleDto } from './dto/update-result-import-schedule.dto';
import { ResultImportSchedule } from './result-import-schedules.entity';
import { ResultImportSchedulesService } from './result-import-schedules.service';

@Controller('result-import-schedules')
export class ResultImportSchedulesController {
  constructor(
    private resultImportScheduleService: ResultImportSchedulesService,
  ) {}

  @Get()
  getFiltered(
    @Query() filterDto: FilterResultImportScheduleDto,
  ): Promise<ResultImportSchedule[]> {
    console.log(filterDto);
    return this.resultImportScheduleService.getFiltered(filterDto);
  }

  @Patch('/:date')
  update(
    @Param('date') date: string,
    @Body() updateDto: UpdateResultImportScheduleDto,
  ): Promise<ResultImportSchedule> {
    return this.resultImportScheduleService.update(date, updateDto);
  }
}
