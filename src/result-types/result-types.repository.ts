import { EntityRepository, Repository } from 'typeorm';
import { ResultType } from './result-types.entity';

@EntityRepository(ResultType)
export class ResultTypeRepository extends Repository<ResultType> {}
