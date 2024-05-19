"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.update = function (subject) {
        console.log("".concat(this.name, ", the product you want is back in stock."));
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map