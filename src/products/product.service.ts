import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Crema Hidratante', price: 400 },
    { id: 2, name: 'Sérum Facial', price: 500 },
  ];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findOne(id: number): Promise<Product> {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
    return product;
  }
}