import { EntityRepository, Repository } from 'typeorm';
import { FilterResultFetchScheduleDto } from './dto/filter-result-fetch-schedule.dto';
import { ResultFetchSchedule } from './result-fetch-schedules.entity';

@EntityRepository(ResultFetchSchedule)
export class ResultFetchScheduleRepository extends Repository<ResultFetchSchedule> {
  async getFiltered(
    filterDto: FilterResultFetchScheduleDto,
  ): Promise<ResultFetchSchedule[]> {
    const { date, is_completed, is_active } = filterDto;
    const query = this.createQueryBuilder('rfs');

    if (typeof date !== 'undefined') {
      query.andWhere('rfs.date = :date', { date });
    }
    if (typeof is_completed !== 'undefined') {
      query.andWhere('rfs.is_completed = :is_completed', { is_completed });
    }
    if (typeof is_active !== 'undefined') {
      query.andWhere('rfs.is_active = :is_active', { is_active });
    }
    return await query.getMany();
  }

  async getByDate(date: Date): Promise<ResultFetchSchedule> {
    const query = this.createQueryBuilder('rfs');
    query.andWhere('rfs.date = :date', { date });
    return await query.getOne();
  }
}
