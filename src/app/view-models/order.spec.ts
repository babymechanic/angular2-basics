import {Order} from './order';
import {LineItem} from './line-item';

describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order('test name', 'test address', [
      new LineItem('apple', 1, 10),
      new LineItem('orange', 2, 5)
    ]);
  });

  describe('#printItemDetails', () => {

    it('should print the details of all the items in the order', () => {
      expect(order.printItemDetails()).toEqual('apple\t1\t10\t10\norange\t2\t5\t10\n');
    });

  });

  describe('#printTotal', () => {
    it('should print the total amount incliding the tax', () => {
      expect(order.printTotal()).toEqual('Total Amount\t22');
    });
  });

  describe('#printSalesTax', () => {
    it('should print the sales tax for the order', () => {
      expect(order.printSalesTax()).toEqual('Sales Tax\t2');
    });
  });

  describe('#printCustomerDetails', () => {
    it('should print the customer details of the order', () => {
      expect(order.printCustomerDetails()).toEqual('test name, test address');
    });
  });

});
