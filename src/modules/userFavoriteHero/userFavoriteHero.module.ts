import { Module } from '@nestjs/common';
import { UserFavoriteHeroController } from './userFavoriteHero.controller';
import { UserFavoriteHeroService } from './userFavoriteHero.service';

@Module({
  exports:      [],
  controllers:  [UserFavoriteHeroController],
  providers:    [UserFavoriteHeroService]
})
export class UserFavoriteHeroModule {}
