import {LineItem} from './line-item';

export class Order {

  constructor(private customerName: string,
              private address: string,
              private lineItems: LineItem[]) {

  }

  printItemDetails(): string {
    return this.lineItems.reduce((acc: string[], lineItem: LineItem) => {
      acc.push(lineItem.printItemDetails());
      return acc;
    }, []).join('');
  }

  printTotal(): string {
    return ['Total Amount',
      '\t',
      this.totalIncludingSalesTax.toString()
    ].join('');
  }

  printSalesTax(): string {
    return ['Sales Tax',
      '\t',
      this.totalSalesTax.toString()
    ].join('');
  }

  printCustomerDetails(): string {
    return `${this.customerName}, ${this.address}`;
  }

  private get totalSalesTax(): number {
    return this.lineItems.reduce((acc, x) => acc + x.salesTax, 0);
  }

  private get totalIncludingSalesTax(): number {
    return this.lineItems.reduce((acc, x) => acc + x.totalAmountIncludingTax, 0);
  }
}
