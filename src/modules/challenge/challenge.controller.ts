import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChallengeService } from './challenge.service';
import { Challenge } from './model';

// @UseGuards(JwtAuthGuard)
@Controller('api/challenge')
export class ChallengeController {
  constructor(private challengeService: ChallengeService) {}
  
  @Get()
  find() {
    return this.challengeService.findAll();
  }

  @Get('today-challenge')
  getToday() {
    return this.challengeService.findLast()
  }

  @Get(':id')
  get(@Param('id') id) {
    return this.challengeService.findOne(id);
  }

  @Post()
  save(@Body() challenge: Challenge) {
    return this.challengeService.save(challenge);
  }
  
  @Delete(':id')
  delete(@Param('id') id) {
    return this.challengeService.delete(id);
  }

  @Put()
  editHero(@Body() challenge: Challenge) {
    return this.challengeService.update(challenge);
  }
}
