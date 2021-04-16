import { EntityRepository, Repository } from 'typeorm';
import { ResultDate } from "./result-dates.entity";

@EntityRepository(ResultDate)
export class ResultDateRepository extends Repository<ResultDate> {}