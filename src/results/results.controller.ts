import { Query } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { query } from 'express';
import { CreateResultDto } from './dto/create-result-dto';
import { ResultsCheckModel } from './model/results.check.model';
import { Result } from './results.entity';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private resultsService: ResultsService) {}

  @Get('/:date')
  getByDate(@Param('date') date: string): Promise<Result[]> {
    return this.resultsService.getByDate(date);
  }

  @Post('/:date')
  create(
    @Param('date') date: string,
    @Body() createDto: CreateResultDto,
  ): Promise<Result> {
    return this.resultsService.create(date, createDto);
  }

  @Post('/:date/bulk')
  createBulk(
    @Param('date') date: string,
    @Body() createDtoList: CreateResultDto[],
  ): Promise<Result[]> {
    return this.resultsService.createBulk(date, createDtoList);
  }

  @Get('/:date/check')
  checkByDate(
    @Param('date') date: string,
    @Query('values') values: string,
  ): Promise<ResultsCheckModel[]> {
    return this.resultsService.checkByDate(date, values.split(','));
  }
}
