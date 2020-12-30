import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultFetchLogDto } from './dto/create-result-fetch-log.dto';
import { ResultFetchLog } from './result-fetch-logs.entity';
import { ResultFetchLogRepository } from './result-fetch-logs.repository';

@Injectable()
export class ResultFetchLogsService {
  constructor(
    @InjectRepository(ResultFetchLogRepository)
    private resultFetchLogRepository: ResultFetchLogRepository,
  ) {}

  async create(
    date: string,
    createDto: CreateResultFetchLogDto,
  ): Promise<ResultFetchLog> {
    const entity = this.transformCreateDtoToEntity(date, createDto);
    return await this.resultFetchLogRepository.save(entity);
  }

  private transformCreateDtoToEntity(
    date: string,
    createDto: CreateResultFetchLogDto,
  ): ResultFetchLog {
    const { timestamp, isSuccess, errorInformation, createdBy } = createDto;
    const entity = new ResultFetchLog();
    entity.date = new Date(date);
    entity.timestamp = timestamp;
    entity.isSuccess = isSuccess;
    entity.errorInformation = errorInformation;
    entity.createdBy = createdBy;
    entity.createdAt = new Date();
    return entity;
  }
}
