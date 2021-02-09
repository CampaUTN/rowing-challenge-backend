import { Controller, Post, Body, Get, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HeroService } from './hero.service';
import { Hero } from './model';

@UseGuards(JwtAuthGuard)
@Controller('api/hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  
  @Get()
  allHeroes() {
    return this.heroService.allHeroes();
  }

  @Get(':id')
  getHero(@Param('id') id) {
    return this.heroService.getHero(id);
  }

  @Post()
  saveHero(@Body() hero: Hero) {
    return this.heroService.save(hero);
  }
  
  @Delete(':id')
  deleteHero(@Param('id') id) {
    return this.heroService.delete(id);
  }

  @Put()
  editHero(@Body() hero: Hero) {
    return this.heroService.update(hero);
  }
}
