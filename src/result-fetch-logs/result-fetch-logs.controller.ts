import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateResultFetchLogDto } from './dto/create-result-fetch-log.dto';
import { ResultFetchLogsService } from './result-fetch-logs.service';

@Controller('result-fetch-logs')
export class ResultFetchLogsController {
  constructor(private resultFetchLogService: ResultFetchLogsService) {}

  @Post('/:date')
  create(
    @Param('date') date: string,
    @Body() createDto: CreateResultFetchLogDto,
  ) {
    return this.resultFetchLogService.create(date, createDto);
  }
}
