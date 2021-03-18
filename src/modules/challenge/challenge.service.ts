import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getErrorMessage } from '../core/errorMessage';
import { Challenge } from "./model";

@Injectable()
export class ChallengeService {
  
  getAll() {
    return Challenge.findAll();
  }

  async delete(id: number) {
    const challenge = await Challenge.findByPk(id);
    return challenge.destroy();
  }
  
  async save(hero: Challenge) {
    try {
      const challengeSave = await Challenge.create(hero);
      return challengeSave;
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, 'Already exist')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  getHero(id: number) {
    return Challenge.findByPk(id);
  }

  async update(hero: Challenge) {
    try {
      const challengeSave = await Challenge.upsert(hero);
      return challengeSave;
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  'Already exist')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
