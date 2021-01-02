import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validateUser(username: string, password: string) {}
  async createAccessToken(userId: string) {
    // const accessToken = this.jwtService.sign({})
  }
}
