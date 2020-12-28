import { Injectable, NotImplementedException } from '@nestjs/common';
import { Result, ResultProvider } from './results.model';
import { ResultsSanookService } from './sanook/results.sanook.service';

@Injectable()
export class ResultsService {
  constructor(private resultSanookService: ResultsSanookService) {}

  getByDate(date: string): Result[] {
    console.log(date);
    return null;
  }

  async getByDateAndProvider(
    date: string,
    provider: string,
  ): Promise<Result[]> {
    if (provider.toLowerCase() === ResultProvider.SANOOK.toLowerCase()) {
      return await this.resultSanookService.getByDate(date);
    } else {
      throw new NotImplementedException();
    }
  }
}
