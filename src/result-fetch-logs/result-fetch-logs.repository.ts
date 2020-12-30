import { EntityRepository, Repository } from 'typeorm';
import { ResultFetchLog } from './result-fetch-logs.entity';

@EntityRepository(ResultFetchLog)
export class ResultFetchLogRepository extends Repository<ResultFetchLog> {}
