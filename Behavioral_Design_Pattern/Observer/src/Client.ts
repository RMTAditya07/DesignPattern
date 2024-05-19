import { Customer } from "./Customer";
import { Product } from "./Product";

const product = new Product();

const john = new Customer('John');
const jane = new Customer('Jane');

product.addObserver(john);
product.addObserver(jane);

product.restock(); // Logs: "John, the product you want is back in stock." "Jane, the product you want is back in stock."

product.removeObserver(jane)

product.restock(); // Logs: "John, the product you want is back in stock." 

