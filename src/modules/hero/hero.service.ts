import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Hero } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class HeroService {
  
  allHeroes() {
    return Hero.findAll();
  }

  async delete(heroId: number) {
    const hero = await Hero.findByPk(heroId);
    return hero.destroy();
  }
  
  async save(hero: Hero) {
    try {
      const heroSave = await Hero.create(hero);
      return heroSave;
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, 'the hero with that name already exist')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  getHero(id: number) {
    return Hero.findByPk(id);
  }

  async update(hero: Hero) {
    try {
      const heroSave = await Hero.upsert(hero);
      return heroSave;
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  'the hero with that name already exist')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
