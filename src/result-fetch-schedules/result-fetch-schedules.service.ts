import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterResultFetchScheduleDto } from './dto/filter-result-fetch-schedule.dto';
import { UpdateResultFetchScheduleDto } from './dto/update-result-fetch-schedule.dto';
import { ResultFetchSchedule } from './result-fetch-schedules.entity';
import { ResultFetchScheduleRepository } from './result-fetch-schedules.repository';

@Injectable()
export class ResultFetchSchedulesService {
  constructor(
    @InjectRepository(ResultFetchScheduleRepository)
    private resultFetchScheduleRepository: ResultFetchScheduleRepository,
  ) {}

  getFiltered(
    filterDto: FilterResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule[]> {
    return this.resultFetchScheduleRepository.getFiltered(filterDto);
  }

  async update(
    date: string,
    updateDto: UpdateResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule> {
    const entity = await this.resultFetchScheduleRepository.getByDate(
      new Date(date),
    );
    if (!entity) {
      throw new NotFoundException(
        `not found result-fetch-schedule for date: ${date}`,
      );
    }

    const { isCompleted, isActive, updatedBy } = updateDto;
    if (typeof isCompleted !== 'undefined') {
      entity.isCompleted = isCompleted;
    }
    if (typeof isActive !== 'undefined') {
      entity.isActive = isActive;
    }
    if (typeof updatedBy !== 'undefined') {
      entity.updatedBy = updatedBy;
    }
    entity.updatedAt = new Date();
    return await this.resultFetchScheduleRepository.save(entity);
  }
}
