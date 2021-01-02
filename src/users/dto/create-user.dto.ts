import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    description: 'username for login',
    default: 'username',
  })
  username: string;
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'password for login',
    default: 'password',
  })
  password: string;
}
