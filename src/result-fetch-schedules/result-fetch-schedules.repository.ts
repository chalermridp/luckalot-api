import { EntityRepository, Repository } from 'typeorm';
import { FilterResultFetchScheduleDto } from './dto/filter-result-fetch-schedule.dto';
import { ResultFetchSchedule } from './result-fetch-schedules.entity';

@EntityRepository(ResultFetchSchedule)
export class ResultFetchScheduleRepository extends Repository<ResultFetchSchedule> {
  async getFiltered(
    filterDto: FilterResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule[]> {
    const { date, isCompleted, isActive } = filterDto;
    const query = this.createQueryBuilder('rfs');

    if (typeof date !== 'undefined') {
      query.andWhere('rfs.date = :date', { date });
    }
    if (typeof isCompleted !== 'undefined') {
      query.andWhere('rfs.isCompleted = :isCompleted', { isCompleted });
    }
    if (typeof isActive !== 'undefined') {
      query.andWhere('rfs.isActive = :isActive', { isActive });
    }
    return await query.getMany();
  }

  async getByDate(date: Date): Promise<ResultFetchSchedule> {
    const query = this.createQueryBuilder('rfs');
    query.andWhere('rfs.date = :date', { date });
    return await query.getOne();
  }
}
