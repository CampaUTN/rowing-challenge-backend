import { Module } from '@nestjs/common';
import { HeroService } from '../hero/hero.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  exports:      [UserService],
  controllers:  [UserController],
  providers:    [UserService, HeroService]
})
export class UserModule {}
