import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RecordTraining } from './model';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class RecordTrainingService {
  
  findAll() {
    return RecordTraining.findAll();
  }

  async delete(id: number) {
    const recordTraining = await RecordTraining.findByPk(id);
    return recordTraining.destroy();
  }
  
  async save(recordTraining: RecordTraining) {
    try {
      return RecordTraining.create(recordTraining);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, '. Error creando RecordTraining')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    return RecordTraining.findByPk(id);
  }

  async update(recordTraining: RecordTraining) {
    try {
      return RecordTraining.upsert(recordTraining);
    } catch (err) {
      throw new HttpException({
        status:   HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message,  '. Error actualizando RecordTraining')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }
}
