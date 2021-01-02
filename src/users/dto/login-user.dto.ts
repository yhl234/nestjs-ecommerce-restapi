import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    description: 'user credential',
  })
  username: string;
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'user credential',
  })
  password: string;
}
