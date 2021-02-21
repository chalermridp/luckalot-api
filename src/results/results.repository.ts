import { EntityRepository, Repository } from 'typeorm';
import { Result } from './results.entity';

@EntityRepository(Result)
export class ResultRepository extends Repository<Result> {
  //todo enable caching
  async getByDate(date: Date): Promise<Result[]> {
    const query = this.createQueryBuilder('result');
    query.andWhere('result.date = :date', { date });
    return await query.getMany();
  }
}
