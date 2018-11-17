import {Product, ProductService} from './product-service';

describe('ProductService', () => {
  describe('#getAll', () => {

    it('should return a list of the available products', async () => {
      const service = new ProductService();

      const products: Product[] = await service.getAll();

      expect(products.length).toEqual(1);
      expect(products[0].name).toEqual('apple');
      expect(products[0].cost).toEqual(1);
    });
  });
});
