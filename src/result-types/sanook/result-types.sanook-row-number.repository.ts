import { EntityRepository, Repository } from 'typeorm';
import { ResultTypeSanookRowNumber } from './result-types.sanook-row-number.entity';

@EntityRepository(ResultTypeSanookRowNumber)
export class ResultTypeSanookRowNumberRepository extends Repository<ResultTypeSanookRowNumber> {}
