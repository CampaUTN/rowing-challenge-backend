import { Module } from '@nestjs/common';
import { RecordChallengeController } from './record-challenge.controller';
import { RecordChallengeService } from './record-challenge.service';

@Module({
  imports:     [],
  controllers: [RecordChallengeController],
  providers:   [RecordChallengeService]
})
export class RecordChallengeModule {}
