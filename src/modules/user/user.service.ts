import { Injectable } from '@nestjs/common';
import { HeroService } from '../hero/hero.service';
import { User } from './model';

@Injectable()
export class UserService {
    
  constructor(private heroService: HeroService) {}

  getUserByMail(mail: string) {
    return User.findOne({ where: { email: mail } });
  }
}
