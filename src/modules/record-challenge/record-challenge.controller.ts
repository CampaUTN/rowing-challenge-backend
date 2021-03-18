import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RecordChallengeService } from './record-challenge.service';
import { RecordChallenge } from './model';

@UseGuards(JwtAuthGuard)
@Controller('api/record-challenge')
export class RecordChallengeController {
  constructor(private recordchallengeService: RecordChallengeService) {}
  
  @Get()
  find() {
    return this.recordchallengeService.findAll();
  }

  @Get(':id')
  get(@Param('id') id) {
    return this.recordchallengeService.findOne(id);
  }

  @Post()
  save(@Body() recordChallenge: RecordChallenge) {
    return this.recordchallengeService.save(recordChallenge);
  }
  
  @Delete(':id')
  delete(@Param('id') id) {
    return this.recordchallengeService.delete(id);
  }

  @Put()
  editHero(@Body() recordChallenge: RecordChallenge) {
    return this.recordchallengeService.update(recordChallenge);
  }
}
