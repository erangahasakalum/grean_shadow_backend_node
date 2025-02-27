import {Order} from "./Order";

export class Item {
    itemId!:number;
    itemName!: string;
    quantity!: number;
    price!: number;
    orders: Order[] = [];

}