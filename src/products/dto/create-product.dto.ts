import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of product',
    default: 'iPhone 12',
  })
  name: string;
  @IsNumber()
  @ApiProperty({
    description: 'Price of product',
    default: 1499,
  })
  price: number;
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product description',
    default: 'Blast past fast.',
  })
  description: string;
}
