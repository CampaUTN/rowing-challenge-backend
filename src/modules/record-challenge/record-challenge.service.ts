import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RecordChallenge } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class RecordChallengeService {
  
  findAll() {
    return RecordChallenge.findAll();
  }

  async delete(id: number) {
    const recordChallenge = await RecordChallenge.findByPk(id);
    return recordChallenge.destroy();
  }
  
  async save(recordChallenge: RecordChallenge) {
    try {
      return RecordChallenge.create(recordChallenge);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, '. Error creando RecordChallenge')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    return RecordChallenge.findByPk(id);
  }

  async update(recordChallenge: RecordChallenge) {
    try {
      return RecordChallenge.upsert(recordChallenge);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  '. Error actualizando RecordChallenge')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
