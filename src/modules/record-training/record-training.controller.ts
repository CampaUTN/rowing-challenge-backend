import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RecordTraining } from './model';
import { RecordTrainingService } from './record-training.service';

@UseGuards(JwtAuthGuard)
@Controller('api/record-training')
export class RecordTrainingController {
  constructor(private recordTrainingService: RecordTrainingService) {}
  
  @Get()
  find() {
    return this.recordTrainingService.findAll();
  }

  @Get(':id')
  get(@Param('id') id) {
    return this.recordTrainingService.findOne(id);
  }

  @Post()
  save(@Body() training: RecordTraining) {
    return this.recordTrainingService.save(training);
  }
  
  @Delete(':id')
  delete(@Param('id') id) {
    return this.recordTrainingService.delete(id);
  }

  @Put()
  editHero(@Body() training: RecordTraining) {
    return this.recordTrainingService.update(training);
  }
}
