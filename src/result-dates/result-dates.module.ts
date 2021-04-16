import { Module } from '@nestjs/common';
import { ResultDatesService } from './result-dates.service';
import { ResultDatesController } from './result-dates.controller';
import { ResultDateRepository } from './result-dates.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([ResultDateRepository])],
  providers: [ResultDatesService],
  controllers: [ResultDatesController],
})
export class ResultDatesModule {}
