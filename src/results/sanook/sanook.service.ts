import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Result } from '../results.model';
import * as cheerio from 'cheerio';

@Injectable()
export class SanookService {
  async getByDate(date: string): Promise<Result[]> {
    //todo convert date format from yyyyMMdd (2020) to ddMMyyyy (2563)
    const url = `https://news.sanook.com/lotto/check/${date}`;
    const lotto = await axios.get(url);
    const $ = cheerio.load(lotto.data);
    const results = [];
    $('.lotto__number').each((index, value) => {
      const result: Result = {
        value: $(value).text(),
        resultTypeCode: '', //todo constant mapping
      };
      results.push(result);
    });
    return results;
  }
}
