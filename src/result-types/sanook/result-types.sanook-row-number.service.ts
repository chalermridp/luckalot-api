import { Injectable } from '@nestjs/common';
import { ResultTypeSanookRowNumber } from './result-types.sanook-row-number.entity';
import { ResultTypeSanookRowNumberRepository } from './result-types.sanook-row-number.repository';

@Injectable()
export class ResultTypesSanookRowNumberService {
  constructor(
    private resultTypeSanookRowNumberRepository: ResultTypeSanookRowNumberRepository,
  ) {}

  //todo cacheable
  async getAll(): Promise<ResultTypeSanookRowNumber[]> {
    return await this.resultTypeSanookRowNumberRepository.find();
  }
}
