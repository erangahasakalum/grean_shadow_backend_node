import {Item} from "./Item";
import Customer from "./Customer";

export class Order {
    orderId!: number;
    date!: Date;
    customerName!: string;
    city!: string;
    telephone!: string;
    itemCode!: string;
    itemName!: string;
    orderQty!: string;
    discount!: string;
    price!: string;
    customerId!: number;
    customer!: Customer;
    items!: Item[];
}

