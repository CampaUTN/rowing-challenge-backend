import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { HeroModule } from './modules/hero/hero.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserFavoriteHeroModule } from './modules/userFavoriteHero/userFavoriteHero.module';

@Module({
  imports:     [UserModule, HeroModule, AuthModule, UserFavoriteHeroModule],
  controllers: [AppController],
  providers:   []
})
export class AppModule {}
