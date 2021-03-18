import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Training } from './model';
import { TrainingService } from './training.service';

@UseGuards(JwtAuthGuard)
@Controller('api/training')
export class TrainingController {
  constructor(private trainingService: TrainingService) {}
  
  @Get()
  find() {
    return this.trainingService.findAll();
  }

  @Get(':id')
  get(@Param('id') id) {
    return this.trainingService.findOne(id);
  }

  @Post()
  save(@Body() training: Training) {
    return this.trainingService.save(training);
  }
  
  @Delete(':id')
  delete(@Param('id') id) {
    return this.trainingService.delete(id);
  }

  @Put()
  editHero(@Body() training: Training) {
    return this.trainingService.update(training);
  }
}
