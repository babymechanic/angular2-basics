const salesTax = .10;

export class LineItem {

  constructor(public readonly description: string,
              public readonly price: number,
              public readonly quantity: number) {
  }

  private get totalAmount(): number {
    return this.price * this.quantity;
  }

  get salesTax(): number {
    return this.totalAmount * salesTax;
  }

  get totalAmountIncludingTax(): number {
    return this.totalAmount + this.salesTax;
  }

  printItemDetails(): string {
    return [
      this.description,
      '\t',
      this.price.toString(),
      '\t',
      this.quantity.toString(),
      '\t',
      this.totalAmount.toString(),
      '\n'
    ].join('');
  }
}
