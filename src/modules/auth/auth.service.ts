import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/model';
import { JwtService } from '@nestjs/jwt';
import { getErrorMessage } from '../core/errorMessage';

@Injectable()
export class AuthService {
  
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(mail: string, pass: string): Promise<any> {
    const user  = await this.userService.getUserByMail(mail);
    const passCheck = !user ? false : await bcrypt.compare(pass, user.password);
    if (user != null && passCheck) {
      return user;
    }
    return null;
  }
  
  async newUser(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
    try {
      const userRes = await User.create(user);
      delete userRes.dataValues.password;
      delete userRes.password;
      return this.newToken(userRes);
    } catch (err) {

      throw new HttpException({
        status:  HttpStatus.INTERNAL_SERVER_ERROR,
        message:  getErrorMessage(err.message, 'the mail is already in use')
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  newToken(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }

  login(user: User) {
    return this.newToken(user);
  }

}
