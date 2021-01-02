import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'The records has been successfully retrieved.',
  })
  async getProducts(): Promise<Product[]> {
    const list = await this.productsService.getProducts();
    return list;
  }

  @Get('/:_id')
  async findOne(@Param('_id') _id: string): Promise<Product> {
    const result = this.productsService.findOne(_id);
    return result;
  }

  @Put('/:_id')
  async update(
    @Param('_id') _id: string,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    const result = this.productsService.update(_id, createProductDto);
    return result;
  }

  @Delete('/:_id')
  async delete(@Param('_id') _id: string): Promise<Product> {
    const result = this.productsService.remove(_id);
    return result;
  }
}
