import { Module } from '@nestjs/common';
import { ResultTypesService } from './result-types.service';
import { ResultTypesController } from './result-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultTypeRepository } from './result-types.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResultTypeRepository])],
  controllers: [ResultTypesController],
  providers: [ResultTypesService],
})
export class ResultTypeModule {}
