import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultImportLogDto } from './dto/create-result-import-log.dto';
import { ResultImportLog } from './result-import-logs.entity';
import { ResultImportLogRepository } from './result-import-logs.repository';

@Injectable()
export class ResultImportLogsService {
  constructor(
    @InjectRepository(ResultImportLogRepository)
    private resultImportLogRepository: ResultImportLogRepository,
  ) {}

  async create(
    date: string,
    createDto: CreateResultImportLogDto,
  ): Promise<ResultImportLog> {
    const entity = this.transformCreateDtoToEntity(date, createDto);
    return await this.resultImportLogRepository.save(entity);
  }

  private transformCreateDtoToEntity(
    date: string,
    createDto: CreateResultImportLogDto,
  ): ResultImportLog {
    const { timestamp, is_success, total_records, error_information, remark, created_by } = createDto;
    const entity = new ResultImportLog();
    entity.date = new Date(date);
    entity.timestamp = timestamp;
    entity.is_success = is_success;
    entity.total_records = total_records;
    entity.error_information = error_information;
    entity.remark = remark;
    entity.created_by = created_by;
    entity.created_at = new Date();
    return entity;
  }
}
