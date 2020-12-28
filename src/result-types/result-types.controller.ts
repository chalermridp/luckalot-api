import { Controller, Get } from '@nestjs/common';
import { ResultType } from './result-types.entity';
import { ResultTypesService } from './result-types.service';

@Controller('result-types')
export class ResultTypesController {
  constructor(private resultTypesService: ResultTypesService) {}

  @Get()
  getAll(): Promise<ResultType[]> {
    return this.resultTypesService.getAll();
  }
}
