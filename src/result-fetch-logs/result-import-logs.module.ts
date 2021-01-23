import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultImportLogsService } from './result-import-logs.service';
import { ResultImportLogsController } from './result-import-logs.controller';
import { ResultImportLogRepository } from './result-import-logs.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultImportLogRepository])],
  providers: [ResultImportLogsService],
  controllers: [ResultImportLogsController],
})
export class ResultImportLogsModule {}
