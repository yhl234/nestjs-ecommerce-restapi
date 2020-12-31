import { Product } from '../schema/product.schema';

export class ProductListDto {
  message: string;
  statusCode: number;
  list: Product[];
}
