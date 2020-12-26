import { Injectable } from '@nestjs/common';
import { Result } from '../results.model';

@Injectable()
export class SanookService {
  getByDate(date: string): Result[] {
    return null;
  }
}
