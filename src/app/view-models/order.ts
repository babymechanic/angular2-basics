import {LineItem} from './line-item';

export class Order {

  constructor(private customerName: string,
              private address: string,
              private lineItems: LineItem[]) {

  }

  printAsString(): string {
    const output: string[] = [];
    this.printHeader(output);
    this.printCustomerDetails(output);
    this.printItemDetails(output);
    this.printSalesTax(output);
    this.printTotal(output);
    return output.join('');
  }

  private printItemDetails(output: string[]) {
    this.lineItems.forEach((lineItem) => output.push(lineItem.printItemDetails()));
  }

  private printTotal(output: string[]) {
    output.push('Total Amount');
    output.push('\t');
    output.push(this.totalIncludingSalesTax.toString());
  }

  private printSalesTax(output: string[]) {
    output.push('Sales Tax');
    output.push('\t');
    output.push(this.totalSalesTax.toString());
  }

  private printCustomerDetails(output: string[]) {
    output.push(this.customerName);
    output.push(this.address);
  }

  private printHeader(output: string[]) {
    output.push('======Printing Orders======\n');
  }

  private get totalSalesTax(): number {
    return this.lineItems.reduce((acc, x) => acc + x.salesTax, 0);
  }

  private get totalIncludingSalesTax(): number {
    return this.lineItems.reduce((acc, x) => acc + x.totalAmountIncludingTax, 0);
  }
}
