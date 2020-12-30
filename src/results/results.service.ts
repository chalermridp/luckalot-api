import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultDto } from './dto/create-result-dto';
import { Result } from './results.entity';
import { ResultRepository } from './results.repository';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(ResultRepository)
    private resultRepository: ResultRepository,
  ) {}

  getByDate(date: string): Promise<Result[]> {
    return this.resultRepository.getByDate(new Date(date));
  }

  async create(
    date: string,
    createResultDto: CreateResultDto,
  ): Promise<Result> {
    const result = this.transformCreateDtoToEntity(date, createResultDto);
    return await this.resultRepository.save(result);
  }

  async createBulk(
    date: string,
    createResultDtoList: CreateResultDto[],
  ): Promise<Result[]> {
    const results = createResultDtoList.map((createResultDto) => {
      return this.transformCreateDtoToEntity(date, createResultDto);
    });
    return await this.resultRepository.save(results);
  }

  private transformCreateDtoToEntity(
    date: string,
    createResultDto: CreateResultDto,
  ): Result {
    const { resultTypeCode, value, createdBy } = createResultDto;
    const result = new Result();
    result.date = new Date(date);
    result.resultTypeCode = resultTypeCode;
    result.value = value;
    result.createdBy = createdBy;
    result.isActive = true;
    result.createdAt = new Date();
    result.updatedBy = null;
    result.updatedAt = null;
    return result;
  }
}
