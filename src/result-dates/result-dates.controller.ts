import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateResultDateDto } from './dto/create-result-date-dto';
import { ResultDate } from './result-dates.entity';
import { ResultDatesService } from './result-dates.service';

@Controller('result-dates')
export class ResultDatesController {
    constructor(private resultDateService: ResultDatesService) { }

    @Get()
    async getAll(): Promise<ResultDate[]> {
        return await this.resultDateService.getAll();
    }

    @Post()
    async create(@Body() createDto: CreateResultDateDto): Promise<ResultDate> {
        return await this.resultDateService.create(createDto);
    }
}
