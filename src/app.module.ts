import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ResultsModule } from './results/results.module';
import { ResultTypeModule } from './result-types/result-types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ResultsModule,
    ResultTypeModule,
  ],
})
export class AppModule {}
