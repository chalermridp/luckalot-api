import { Injectable, NotImplementedException } from '@nestjs/common';
import { Result, ResultProvider } from './results.model';
import { SanookService } from './sanook/sanook.service';

@Injectable()
export class ResultsService {
  constructor(private sanookService: SanookService) {}

  getByDate(date: string): Result[] {
    return null;
  }

  getByDateAndProvider(date: string, provider: string): Result[] {
    if (provider.toLowerCase() === ResultProvider.SANOOK.toLowerCase()) {
      return this.sanookService.getByDate(date);
    } else {
      throw new NotImplementedException();
    }
  }
}
