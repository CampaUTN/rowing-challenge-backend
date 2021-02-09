import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  login(@Request() req) {
    return this.authService.login(req.user); 
  }
  
  @Post('register')
  newUser(@Body() user) {
    return this.authService.newUser(user);
  }

}
