import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ResultsModule } from './results/results.module';
import { ResultTypeModule } from './result-types/result-types.module';
import { ResultTypeSanookRowNumberModule } from './result-types/sanook/result-types.sanook-row-number.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ResultsModule,
    ResultTypeModule,
    ResultTypeSanookRowNumberModule,
  ],
})
export class AppModule {}
