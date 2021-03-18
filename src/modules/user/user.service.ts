import { Injectable } from '@nestjs/common';
import { User } from './model';

@Injectable()
export class UserService {

  getUserByMail(mail: string) {
    return User.findOne({ where: { email: mail } });
  }
}
