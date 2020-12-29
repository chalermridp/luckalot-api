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

  async getAll(): Promise<ResultType[]> {
    return await this.resultTypesRepository.find();
  }
}
