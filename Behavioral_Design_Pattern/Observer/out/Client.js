"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var Product_1 = require("./Product");
var product = new Product_1.Product();
var john = new Customer_1.Customer('John');
var jane = new Customer_1.Customer('Jane');
product.addObserver(john);
product.addObserver(jane);
product.restock(); // Logs: "John, the product you want is back in stock." "Jane, the product you want is back in stock."
product.removeObserver(jane);
product.restock(); // Logs: "John, the product you want is back in stock." 
//# sourceMappingURL=Client.js.map