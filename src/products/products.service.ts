import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductListDto } from './dto/product-list.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    await newProduct.save();
    return newProduct;
  }
  async getProducts(): Promise<Product[]> {
    const productList = await this.productModel.find();
    return productList;
  }
  async findOne(_id: string): Promise<Product> {
    const product = await this.productModel.findById(_id);
    return product;
  }
  async update(
    _id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const newProduct = await this.productModel.findByIdAndUpdate(
      _id,
      createProductDto,
      { new: true },
    );
    return newProduct;
  }
  async remove(_id: string): Promise<Product> {
    const temp = await this.productModel.findByIdAndDelete(_id);
    return temp;
  }
}
