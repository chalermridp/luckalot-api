import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from '../config/configuration';
import { ResultsModule } from './results/results.module';
import { ResultTypeModule } from './result-types/result-types.module';
import { ResultFetchLogsModule } from './result-fetch-logs/result-fetch-logs.module';
import { ResultFetchSchedulesModule } from './result-fetch-schedules/result-fetch-schedules.module';
import { TypeOrmConfigService } from './config/typeorm.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    ResultsModule,
    ResultTypeModule,
    ResultFetchLogsModule,
    ResultFetchSchedulesModule,
  ],
})
export class AppModule {}
