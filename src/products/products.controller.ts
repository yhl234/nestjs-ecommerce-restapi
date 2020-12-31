import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductListDto } from './dto/product-list.dto';
import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }
  @Get()
  async getProducts(): Promise<ProductListDto> {
    const list = await this.productsService.getProducts();
    const result = {
      message: 'all products',
      list,
      statusCode: 200,
    };
    return result;
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
