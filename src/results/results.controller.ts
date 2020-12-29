import { Controller, Get, Param } from '@nestjs/common';
import { Result } from './results.model';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private resultsService: ResultsService) {}

  @Get('/:date')
  getByDate(@Param('date') date: string): Result[] {
    return this.resultsService.getByDate(date);
  }
}
