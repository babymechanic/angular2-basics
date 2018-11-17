import {Order} from './order';

export class OrderReceipt {

  constructor(private order: Order) {
  }

  printReceipt(): string {
    return [
      '======Printing Orders======\n',
      this.order.printCustomerDetails(),
      this.order.printItemDetails(),
      this.order.printSalesTax(),
      this.order.printTotal(),
    ].join('');
  }
}
