import { Module } from '@nestjs/common';
import { RecordTrainingController } from './record-training.controller';
import { RecordTrainingService } from './record-training.service';

@Module({
  imports:     [],
  controllers: [RecordTrainingController],
  providers:   [RecordTrainingService]
})
export class RecordTrainingModule {}
