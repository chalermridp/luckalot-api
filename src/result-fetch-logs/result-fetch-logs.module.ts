import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultFetchLogsService } from './result-fetch-logs.service';
import { ResultFetchLogsController } from './result-fetch-logs.controller';
import { ResultFetchLogRepository } from './result-fetch-logs.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultFetchLogRepository])],
  providers: [ResultFetchLogsService],
  controllers: [ResultFetchLogsController],
})
export class ResultFetchLogsModule {}
