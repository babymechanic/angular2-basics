import {Product, ProductService} from './product-service';

describe('ProductService', () => {
  describe('#getAll', () => {

    it('should return a list of the available products', () => {
      const service = new ProductService();

      return service.getAll()

        .then((products: Product[]) => {
          expect(products.length).toEqual(1);
          expect(products[0].name).toEqual('apple');
          expect(products[0].cost).toEqual(1);
        });
    });
  });
});
