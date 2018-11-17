import {LineItem} from './line-item';

describe('LineItem', () => {

  describe('#salesTax', () => {

    it('should return the sales tax for the item', () => {
      const lineItem = new LineItem('butter', 1, 10);

      expect(lineItem.salesTax).toBe(1);
    });
  });

  describe('#totalAmountIncludingTax', () => {

    it('should return the amount inclusive of sales tax for the item', () => {
      const lineItem = new LineItem('butter', 1, 10);

      expect(lineItem.totalAmountIncludingTax).toBe(11);
    });

  });

  describe('#printItemDetails', () => {

    it('should print the details of the line item', () => {
      const lineItem = new LineItem('butter', 1, 10);

      expect(lineItem.printItemDetails()).toBe('butter\t1\t10\t10\n');
    });

  });
});
