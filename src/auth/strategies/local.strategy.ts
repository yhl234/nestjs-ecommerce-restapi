import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super();
  }
  async validate(loginUserDto: LoginUserDto): Promise<any> {
    const user = this.userService.validateUser(loginUserDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    // return user;
    this.userService.login();
  }
}
