import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { FilterResultFetchScheduleDto } from './dto/filter-result-fetch-schedule.dto';
import { UpdateResultFetchScheduleDto } from './dto/update-result-fetch-schedule.dto';
import { ResultFetchSchedule } from './result-fetch-schedules.entity';
import { ResultFetchSchedulesService } from './result-fetch-schedules.service';

@Controller('result-fetch-schedules')
export class ResultFetchSchedulesController {
  constructor(
    private resultFetchScheduleService: ResultFetchSchedulesService,
  ) {}

  @Get()
  getFiltered(
    @Query() filterDto: FilterResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule[]> {
    console.log(filterDto);
    return this.resultFetchScheduleService.getFiltered(filterDto);
  }

  @Patch('/:date')
  update(
    @Param('date') date: string,
    @Body() updateDto: UpdateResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule> {
    console.log(updateDto);
    return this.resultFetchScheduleService.update(date, updateDto);
  }
}
