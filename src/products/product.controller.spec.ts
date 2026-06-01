import { Test } from '@nestjs/testing';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    service = moduleRef.get<ProductsService>(ProductsService);
    controller = moduleRef.get<ProductsController>(ProductsController);
  });

  describe('findAll', () => {
    it('should return all products', async () => {
      const result = [
        { id: 1, name: 'Crema Hidratante', price: 400 },
        { id: 2, name: 'Sérum Facial', price: 500 },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return one product', async () => {
      const product = { id: 1, name: 'Crema Hidratante', price: 400 };
0
      jest.spyOn(service, 'findOne').mockResolvedValue(product);

      expect(await controller.findOne(1)).toBe(product);
    });
  });
});