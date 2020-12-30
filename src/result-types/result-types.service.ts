import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultType } from './result-types.entity';
import { ResultTypeRepository } from './result-types.repository';

@Injectable()
export class ResultTypesService {
  constructor(
    @InjectRepository(ResultTypeRepository)
    private resultTypesRepository: ResultTypeRepository,
  ) {}

  getAll(): Promise<ResultType[]> {
    return this.resultTypesRepository.find();
  }
}
