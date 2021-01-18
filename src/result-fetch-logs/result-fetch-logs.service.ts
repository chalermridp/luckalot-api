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
    const { timestamp, is_success, error_information, created_by } = createDto;
    const entity = new ResultFetchLog();
    entity.date = new Date(date);
    entity.timestamp = timestamp;
    entity.is_success = is_success;
    entity.error_information = error_information;
    entity.created_by = created_by;
    entity.created_at = new Date();
    return entity;
  }
}
