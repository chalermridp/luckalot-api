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

  async create(date: string, createDto: CreateResultDto): Promise<Result> {
    const result = this.transformCreateDtoToEntity(date, createDto);
    return await this.resultRepository.save(result);
  }

  async createBulk(
    date: string,
    createDtoList: CreateResultDto[],
  ): Promise<Result[]> {
    const results = createDtoList.map((createResultDto) => {
      return this.transformCreateDtoToEntity(date, createResultDto);
    });
    return await this.resultRepository.save(results);
  }

  private transformCreateDtoToEntity(
    date: string,
    createDto: CreateResultDto,
  ): Result {
    const { resultTypeCode, value, createdBy } = createDto;
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
