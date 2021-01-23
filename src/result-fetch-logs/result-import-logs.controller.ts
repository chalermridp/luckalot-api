import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateResultImportLogDto } from './dto/create-result-import-log.dto';
import { ResultImportLogsService } from './result-import-logs.service';

@Controller('result-import-logs')
export class ResultImportLogsController {
  constructor(private resultImportLogService: ResultImportLogsService) {}

  @Post('/:date')
  create(
    @Param('date') date: string,
    @Body() createDto: CreateResultImportLogDto,
  ) {
    return this.resultImportLogService.create(date, createDto);
  }
}
