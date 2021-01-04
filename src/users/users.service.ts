import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return newUser;
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
  async login() {
    console.log('login');
  }

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.findOneByUsername(loginUserDto.username);
    const match = await this.checkPassword(loginUserDto.password, user);
    if (user && match) {
      return user;
    }
    return null;
  }

  /**
   *
   * @param username
   */
  private async findOneByUsername(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    // if (!user) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }
    return user;
  }
  /**
   *
   * @param password
   * @param user
   */
  private async checkPassword(password: string, user: User): Promise<User> {
    const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }
    return match;
  }
}
