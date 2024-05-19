"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
        this.observers = [];
    }
    Product.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Product.prototype.removeObserver = function (observer) {
        var removeIndex = this.observers.findIndex(function (obs) { return observer === obs; });
        if (removeIndex !== -1) {
            this.observers.splice(removeIndex, 1);
        }
        else {
            console.log("Subscriber not found!");
        }
    };
    Product.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    Product.prototype.restock = function () {
        this.notifyObservers();
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map