import {Order} from './order';

export class OrderReceipt {

  constructor(private order: Order) {
  }

  printReceipt(): string {
    return this.order.printAsString();
  }
}
