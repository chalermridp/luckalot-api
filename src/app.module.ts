import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ResultsModule } from './results/results.module';
import { ResultTypeModule } from './result-types/result-types.module';
import { ResultImportLogsModule } from './result-fetch-logs/result-import-logs.module';
import { ResultImportSchedulesModule } from './result-import-schedules/result-import-schedules.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ResultsModule,
    ResultTypeModule,
    ResultImportLogsModule,
    ResultImportSchedulesModule,
  ],
})
export class AppModule {}
