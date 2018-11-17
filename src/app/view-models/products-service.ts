export class Product {
  constructor(public readonly name: string,
              public readonly price: number) {
  }
}

export class ProductsService {

  private all: Product[];

  constructor() {
    this.all = [
      new Product('milk', 2),
      new Product('biscuits', 4),
      new Product('chocolate', 3)
    ];
  }

  getAllProducts(): Product[] {
    return this.all;
  }
}
