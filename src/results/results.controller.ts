import { Controller, Get, Param } from '@nestjs/common';
import { Result } from './results.model';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private resultsService: ResultsService) {}

  @Get('/:date')
  getByDate(@Param('date') date: string): Result[] {
    console.log('getByDate');
    return this.resultsService.getByDate(date);
  }

  @Get('/:date/:provider')
  getByProviderAndDate(
    @Param('date') date: string,
    @Param('provider') provider: string,
  ): Result[] {
    console.log('getByProviderAndDate');
    return this.resultsService.getByDateAndProvider(date, provider);
  }
}
