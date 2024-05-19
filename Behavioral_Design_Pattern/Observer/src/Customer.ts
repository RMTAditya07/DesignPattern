import { Observer } from "./interface/Observer";
import { Subject } from "./interface/Subject";

export class Customer implements Observer {
    constructor(private name: string) {}

    update(subject: Subject): void {
        console.log(`${this.name}, the product you want is back in stock.`);
    }
}