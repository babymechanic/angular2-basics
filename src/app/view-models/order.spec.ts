import {Order} from './order';
import {LineItem} from './line-item';

describe('Order', () => {
  let order: Order;
  let item1: LineItem;
  let item2: LineItem;

  beforeEach(() => {
    item1 = new LineItem('apple', 1, 10);
    item2 = new LineItem('orange', 2, 5);
    order = new Order('test name', 'test address', [item1, item2]);
  });

  describe('#printItemDetails', () => {

    it('should print the details of all the items in the order', () => {
      spyOn(item1, 'printItemDetails').and.returnValue('details1');
      spyOn(item2, 'printItemDetails').and.returnValue('details2');

      const printedDetails = order.printItemDetails();

      expect(printedDetails).toEqual('details1details2');
    });

  });

  describe('#printTotal', () => {
    it('should print the total amount incliding the tax', () => {
      spyOnProperty(item1, 'totalAmountIncludingTax', 'get').and.returnValue(1);
      spyOnProperty(item2, 'totalAmountIncludingTax', 'get').and.returnValue(2);

      const total = order.printTotal();

      expect(total).toEqual('Total Amount\t3');
    });
  });

  describe('#printSalesTax', () => {
    it('should print the sales tax for the order', () => {
      spyOnProperty(item1, 'salesTax', 'get').and.returnValue(3);
      spyOnProperty(item2, 'salesTax', 'get').and.returnValue(5);

      const salesTax = order.printSalesTax();

      expect(salesTax).toEqual('Sales Tax\t8');
    });
  });

  describe('#printCustomerDetails', () => {
    it('should print the customer details of the order', () => {
      expect(order.printCustomerDetails()).toEqual('test name, test address');
    });
  });

});
