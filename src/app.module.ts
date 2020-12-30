import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ResultsModule } from './results/results.module';
import { ResultTypeModule } from './result-types/result-types.module';
import { ResultFetchLogsModule } from './result-fetch-logs/result-fetch-logs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ResultsModule,
    ResultTypeModule,
    ResultFetchLogsModule,
  ],
})
export class AppModule {}
