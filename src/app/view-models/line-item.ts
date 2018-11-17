export class LineItem {

  constructor(private desc: string,
              private p: number,
              private qty: number) {
  }

  GetDescription() {
    return this.desc;
  }

  GetPrice() {
    return this.p;
  }

  GetQuantity() {
    return this.qty;
  }

  TotalAmount() {
    return this.p * this.qty;
  }
}
