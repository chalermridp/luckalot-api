import { ResultType } from 'src/result-types/result-types.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Result } from './results.entity';

@EntityRepository(Result)
export class ResultRepository extends Repository<Result> {
  //todo enable caching
  async getByDate(date: Date): Promise<Result[]> {
    const query = this.createQueryBuilder('result');
    query.andWhere('result.date = :date', { date });
    query.addOrderBy('result.value');
    return await query.getMany();
  }
}
