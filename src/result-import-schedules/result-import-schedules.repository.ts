import { EntityRepository, Repository } from 'typeorm';
import { FilterResultImportScheduleDto } from './dto/filter-result-import-schedule.dto';
import { ResultImportSchedule } from './result-import-schedules.entity';

@EntityRepository(ResultImportSchedule)
export class ResultImportScheduleRepository extends Repository<ResultImportSchedule> {
  async getFiltered(
    filterDto: FilterResultImportScheduleDto,
  ): Promise<ResultImportSchedule[]> {
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

  async getByDate(date: Date): Promise<ResultImportSchedule> {
    const query = this.createQueryBuilder('rfs');
    query.andWhere('rfs.date = :date', { date });
    return await query.getOne();
  }
}
