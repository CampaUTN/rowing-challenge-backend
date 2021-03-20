import { Injectable } from '@nestjs/common';
import { User } from './model';

@Injectable()
export class UserService {
    
  constructor() {}

  getUserByMail(mail: string) {
    return User.findOne({ where: { email: mail } });
  }
}
