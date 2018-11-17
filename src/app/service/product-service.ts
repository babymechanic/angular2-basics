export class Product {

  constructor(public readonly name: string,
              public readonly cost: number) {
  }
}

export class ProductService {

  private readonly allProducts: Product[];


  constructor() {
    this.allProducts = [
      new Product('apple', 1)
    ];
  }

  getAll(): Promise<Product[]> {
    return Promise.resolve(this.allProducts);
  }
}
