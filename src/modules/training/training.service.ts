import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Training } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class TrainingService {
  
  findAll() {
    return Training.findAll();
  }

  async delete(id: number) {
    const training = await Training.findByPk(id);
    return training.destroy();
  }
  
  async save(training: Training) {
    try {
      return Training.create(training);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, '. Error creando Training')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    return Training.findByPk(id);
  }

  async update(training: Training) {
    try {
      return Training.upsert(training);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  '. Error actualizando Training')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
