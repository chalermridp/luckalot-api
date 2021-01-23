import { EntityRepository, Repository } from 'typeorm';
import { ResultImportLog } from './result-import-logs.entity';

@EntityRepository(ResultImportLog)
export class ResultImportLogRepository extends Repository<ResultImportLog> {}
