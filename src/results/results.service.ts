import { Injectable, NotImplementedException } from '@nestjs/common';
import { Result, ResultProvider } from './results.model';
import { SanookService } from './sanook/sanook.service';

@Injectable()
export class ResultsService {
  constructor(private sanookService: SanookService) {}

  getByDate(date: string): Result[] {
    console.log(date);
    return null;
  }

  async getByDateAndProvider(
    date: string,
    provider: string,
  ): Promise<Result[]> {
    if (provider.toLowerCase() === ResultProvider.SANOOK.toLowerCase()) {
      return await this.sanookService.getByDate(date);
    } else {
      throw new NotImplementedException();
    }
  }
}
