
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { ChallengeModule } from './modules/challenge/challenge.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports:     [UserModule, ChallengeModule, AuthModule],
  controllers: [AppController],
  providers:   []
})
export class AppModule {}
