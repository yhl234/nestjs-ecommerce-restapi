import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async validateUser(username: string, password: string) {}
  async createAccessToken(userId: string) {
    // const accessToken = this.jwtService.sign({})
  }
}
