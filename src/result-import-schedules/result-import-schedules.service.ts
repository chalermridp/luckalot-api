import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterResultImportScheduleDto } from './dto/filter-result-import-schedule.dto';
import { UpdateResultImportScheduleDto } from './dto/update-result-import-schedule.dto';
import { ResultImportSchedule } from './result-import-schedules.entity';
import { ResultImportScheduleRepository } from './result-import-schedules.repository';

@Injectable()
export class ResultImportSchedulesService {
  constructor(
    @InjectRepository(ResultImportScheduleRepository)
    private resultImportScheduleRepository: ResultImportScheduleRepository,
  ) {}

  getFiltered(
    filterDto: FilterResultImportScheduleDto,
  ): Promise<ResultImportSchedule[]> {
    return this.resultImportScheduleRepository.getFiltered(filterDto);
  }

  async update(
    date: string,
    updateDto: UpdateResultImportScheduleDto,
  ): Promise<ResultImportSchedule> {
    const entity = await this.resultImportScheduleRepository.getByDate(
      new Date(date),
    );
    if (!entity) {
      throw new NotFoundException(
        `not found result-import-schedule for date: ${date}`,
      );
    }

    const { is_completed, is_active, updated_by } = updateDto;
    if (typeof is_completed !== 'undefined') {
      entity.is_completed = is_completed;
    }
    if (typeof is_active !== 'undefined') {
      entity.is_active = is_active;
    }
    if (typeof updated_by !== 'undefined') {
      entity.updated_by = updated_by;
    }
    entity.updated_at = new Date();
    return await this.resultImportScheduleRepository.save(entity);
  }
}
