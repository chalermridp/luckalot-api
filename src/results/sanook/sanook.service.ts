import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Result } from '../results.model';

@Injectable()
export class SanookService {
  async getByDate(date: string): Promise<Result[]> {
    const url = `https://news.sanook.com/lotto/check/${date}`;
    const lotto = await axios.get(url);
    console.log(lotto.data);
    return null;
  }
}
