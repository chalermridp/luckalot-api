import { Injectable, NotImplementedException } from '@nestjs/common';
import { Result, ResultProvider } from './results.model';

@Injectable()
export class ResultsService {
  getByDate(date: string): Result[] {
    console.log(date);
    return null;
  }
}
