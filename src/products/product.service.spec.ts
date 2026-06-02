import { Test } from '@nestjs/testing';
import { ProductsService } from './product.service';
import { NotFoundException } from '@nestjs/common';

describe('ProductsService (Test Unitario del Servicio)', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = moduleRef.get<ProductsService>(ProductsService);
  });

  describe('findAll', () => {
    it('should return the hardcoded array of products', async () => {
      const products = await service.findAll();

      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBe(2);
      expect(products[0].name).toBe('Crema Hidratante');
    });
  });

  describe('findOne', () => {
    it('should return a product if it exists in the array', async () => {
      const product = await service.findOne(1);

      expect(product).toBeDefined();
      expect(product.id).toBe(1);
      expect(product.name).toBe('Crema Hidratante');
    });

    it('should throw a NotFoundException if the product does not exist', async () => {
      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });
});