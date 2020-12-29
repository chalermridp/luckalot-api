import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultTypeSanookRowNumber } from './result-types.sanook-row-number.entity';
import { ResultTypeSanookRowNumberRepository } from './result-types.sanook-row-number.repository';

@Injectable()
export class ResultTypesSanookRowNumberService {
  constructor(
    @InjectRepository(ResultTypeSanookRowNumberRepository)
    private resultTypeSanookRowNumberRepository: ResultTypeSanookRowNumberRepository,
  ) {}

  //todo cacheable
  async getAll(): Promise<ResultTypeSanookRowNumber[]> {
    return await this.resultTypeSanookRowNumberRepository.find();
  }
}
