import {Order} from './order';
import {OrderReceipt} from './order-receipt';

describe('OrderReceipt', () => {

  describe('#printReceipt', () => {

    it('should print thr receipt in the right format', () => {
      const order = new Order('', '', []);
      const receipt = new OrderReceipt(order);
      const customerDetails = 'customerDetails';
      spyOn(order, 'printCustomerDetails').and.returnValue(customerDetails);
      const itemDetails = 'itemDetails';
      spyOn(order, 'printItemDetails').and.returnValue(itemDetails);
      const salesTax = 'salesTax';
      spyOn(order, 'printSalesTax').and.returnValue(salesTax);
      const total = 'total';
      spyOn(order, 'printTotal').and.returnValue(total);

      const output = receipt.printReceipt();

      expect(output).toEqual(`======Printing Orders======\n${customerDetails}${itemDetails}${salesTax}${total}`);
    });

  });

});
