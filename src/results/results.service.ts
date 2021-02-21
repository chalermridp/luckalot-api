import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResultDto } from './dto/create-result-dto';
import { ResultsCheckModel } from './model/results.check.model';
import { Result } from './results.entity';
import { ResultRepository } from './results.repository';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(ResultRepository)
    private resultRepository: ResultRepository,
  ) {}

  getByDate(date: string): Promise<Result[]> {
    return this.resultRepository.getByDate(new Date(date));
  }

  async create(date: string, createDto: CreateResultDto): Promise<Result> {
    const result = this.transformCreateDtoToEntity(date, createDto);
    return await this.resultRepository.save(result);
  }

  async createBulk(
    date: string,
    createDtoList: CreateResultDto[],
  ): Promise<Result[]> {
    const results = createDtoList.map((createResultDto) => {
      return this.transformCreateDtoToEntity(date, createResultDto);
    });
    return await this.resultRepository.save(results);
  }

  private transformCreateDtoToEntity(
    date: string,
    createDto: CreateResultDto,
  ): Result {
    const { result_type_code, value, created_by } = createDto;
    const result = new Result();
    result.date = new Date(date);
    result.result_type_code = result_type_code;
    result.value = value;
    result.created_by = created_by;
    result.is_active = true;
    result.created_at = new Date();
    result.updated_at = null;
    result.updated_by = null;
    return result;
  }

  async checkByDate(
    date: string,
    values: string[],
  ): Promise<ResultsCheckModel[]> {
    const list = await this.resultRepository.getByDate(new Date(date));
    const results = values.map((value) => {
      const result = new ResultsCheckModel();
      result.value = value;
      result.result_type_code = this.getWinResultTypeCodes(list, value);
      return result;
    });
    return results;
  }

  getWinResultTypeCodes(list: Result[], value: string): string[] {
    const results = [];
    results.push(
      list
        .filter((r) => r.result_type_code === 'first' && r.value === value)
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter((r) => r.result_type_code === 'second' && r.value === value)
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter((r) => r.result_type_code === 'third' && r.value === value)
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter((r) => r.result_type_code === 'fourth' && r.value === value)
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter((r) => r.result_type_code === 'fifth' && r.value === value)
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter(
          (r) =>
            r.result_type_code === 'three_prefix' &&
            r.value === value.substring(0, 3),
        )
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter(
          (r) =>
            r.result_type_code === 'three_suffix' &&
            r.value === value.substring(value.length - 3),
        )
        .map((r) => r.result_type_code)
        .toString(),
    );
    results.push(
      list
        .filter(
          (r) =>
            r.result_type_code === 'two_suffix' &&
            r.value === value.substring(value.length - 2),
        )
        .map((r) => r.result_type_code)
        .toString(),
    );
    return results.filter((r) => r);
  }
}
