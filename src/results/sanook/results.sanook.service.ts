import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Result } from '../results.model';
import * as cheerio from 'cheerio';
import { ResultTypesSanookRowNumberService } from 'src/result-types/sanook/result-types.sanook-row-number.service';

@Injectable()
export class ResultsSanookService {
  constructor(
    private resultTypeSanookRowNumberService: ResultTypesSanookRowNumberService,
  ) {}

  async getByDate(date: string): Promise<Result[]> {
    //todo convert date format from yyyyMMdd (2020) to ddMMyyyy (2563)
    const url = `https://news.sanook.com/lotto/check/${date}`;
    const lotto = await axios.get(url);
    const $ = cheerio.load(lotto.data);
    const results = [];
    const rowNumbers = await this.resultTypeSanookRowNumberService.getAll();
    $('.lotto__number').each((index, value) => {
      const result: Result = {
        value: $(value).text(),
        resultTypeCode: rowNumbers.find(
          (i) => index >= i.rowNumberStart && index <= i.rowNumberEnd,
        ).resultTypeCode,
      };
      results.push(result);
    });
    return results;
  }
}
