import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Challenge } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class ChallengeService {
  
  findAll() {
    return Challenge.findAll();
  }

  async delete(id: number) {
    const challenge = await Challenge.findByPk(id);
    return challenge.destroy();
  }
  
  async save(challenge: Challenge) {
    try {
      return Challenge.create(challenge);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, '. Error creando Challenge')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findLast() {
    const challenges = await Challenge.findAll();
    if (challenges.length) {
      return challenges[challenges.length - 1];
    } else {
      throw new Error('Error getting today');
    }
  }

  findOne(id: number) {
    return Challenge.findByPk(id);
  }

  async update(challenge: Challenge) {
    try {
      return Challenge.upsert(challenge);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  '. Error actualizando Challenge')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
