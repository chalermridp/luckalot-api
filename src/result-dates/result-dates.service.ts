import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultDateDto } from './dto/create-result-date-dto';
import { ResultDate } from './result-dates.entity';
import { ResultDateRepository } from './result-dates.repository';

@Injectable()
export class ResultDatesService {
    constructor(
        @InjectRepository(ResultDateRepository)
        private resultDateRepository: ResultDateRepository,
    ) { }

    getAll(): Promise<ResultDate[]> {
        return this.resultDateRepository.find();
    }

    async create(createDto: CreateResultDateDto): Promise<ResultDate> {
        const resultDate = this.transformCreateDtoToEntity(createDto);
        return await this.resultDateRepository.save(resultDate);
    }

    private transformCreateDtoToEntity(createDto: CreateResultDateDto): ResultDate {
        const { date, created_by } = createDto;
        const resultDate = new ResultDate();
        resultDate.date = date;
        resultDate.created_by = created_by;
        resultDate.is_active = true;
        resultDate.created_at = new Date();
        resultDate.updated_at = null;
        resultDate.updated_by = null;
        return resultDate;
    }
}
