/**
 * OrderReceipt prints the details of order including customer name, address, description, quantity,
 * price and amount. It also calculates the sales tax @ 10% and prints as part
 * of order. It computes the total order amount (amount of individual lineItems +
 * total sales tax) and prints it.
 *
 */
import {Order} from './order';

export class OrderReceipt {

  constructor(private o: Order) {
  }

  printReceipt() {
    const output: string[] = [];

    // print headers
    output.push('======Printing Orders======\n');

    // print date, bill no, customer name
    //        output.append("Date - " + order.getDate();
    output.push(this.o.GetCustomerName());
    output.push(this.o.GetCustomerAddress());
    //        output.append(order.getCustomerLoyaltyNumber());

    // prints lineItems
    let totSalesTx = 0;
    let tot = 0;
    this.o.GetLineItems().forEach((lineItem) => {
      output.push(lineItem.GetDescription());
      output.push('\t');
      output.push(lineItem.GetPrice().toString());
      output.push('\t');
      output.push(lineItem.GetQuantity().toString());
      output.push('\t');
      output.push(lineItem.TotalAmount());
      output.push('\n');
      // calculate sales tax @ rate of 10%
      const salesTax = lineItem.TotalAmount() * .10;
      totSalesTx += salesTax;
      // calculate total amount of lineItem = price * quantity + 10 % sales tax
      tot += lineItem.TotalAmount() + salesTax;
    });

    // prints the state tax
    output.push('Sales Tax');
    output.push('\t');
    output.push(totSalesTx.toString());

    // print total amount
    output.push('Total Amount');
    output.push('\t');
    output.push(tot.toString());
    return output.join('');
  }
}
