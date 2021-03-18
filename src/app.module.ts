import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { ChallengeModule } from './modules/hero/challenge.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports:     [UserModule, ChallengeModule, AuthModule],
  controllers: [AppController],
  providers:   []
})
export class AppModule {}
