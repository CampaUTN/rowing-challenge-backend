import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {ChallengeService} from "./challenge.service";
import {Challenge} from "./model";

@UseGuards(JwtAuthGuard)
@Controller('api/challenge')
export class ChallengeController {
  constructor(private challengeService: ChallengeService) {}
  
  @Get()
  allHeroes() {
    return this.challengeService.getAll();
  }

  @Get(':id')
  getHero(@Param('id') id) {
    return this.challengeService.getHero(id);
  }

  @Post()
  create(@Body() challenge: Challenge) {
    return this.challengeService.save(challenge);
  }
  
  @Delete(':id')
  deleteHero(@Param('id') id) {
    return this.challengeService.delete(id);
  }

  @Put()
  editHero(@Body() challenge: Challenge) {
    return this.challengeService.update(challenge);
  }
}
