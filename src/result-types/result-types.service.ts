import { Injectable } from '@nestjs/common';
import { ResultType } from './result-types.entity';
import { ResultTypeRepository } from './result-types.repository';

@Injectable()
export class ResultTypesService {
  constructor(private resultTypesRepository: ResultTypeRepository) {}

  async getAll(): Promise<ResultType[]> {
    return await this.resultTypesRepository.find();
  }
}
