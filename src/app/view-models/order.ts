import {LineItem} from './line-item';

export class Order {
  constructor(private nm: string,
              private addr: string,
              private li: LineItem[]) {

  }

  GetCustomerName() {
    return this.nm;
  }

  GetCustomerAddress() {
    return this.addr;
  }

  GetLineItems() {
    return this.li;
  }
}
