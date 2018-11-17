import {Order} from './order';
import {OrderReceipt} from './order-receipt';
import {LineItem} from './line-item';

describe('OrderReceipt', () => {

  describe('#printReceipt', () => {

    it('should print customer information on order', () => {
      const order = new Order('Mr X', 'Chicago, 60601', []);
      const receipt = new OrderReceipt(order);

      const output = receipt.printReceipt();

      expect(output).toContain('Mr X');
      expect(output).toContain('Chicago, 60601');
    });

    it('should print line item and sales tax information', () => {

      const lineItems = [
        new LineItem('milk', 10.0, 2),
        new LineItem('biscuits', 5.0, 5),
        new LineItem('chocolate', 20.0, 1)
      ];
      const receipt = new OrderReceipt(new Order(null, null, lineItems));

      const output = receipt.printReceipt();

      expect(output).toContain('milk\t10\t2\t20\n');
      expect(output).toContain('biscuits\t5\t5\t25\n');
      expect(output).toContain('chocolate\t20\t1\t20\n');
      expect(output).toContain('Sales Tax\t6.5');
      expect(output).toContain('Total Amount\t71.5');
    });

  });

});
