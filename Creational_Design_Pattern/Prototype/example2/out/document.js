"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Document = /** @class */ (function () {
    function Document(name, two_dim_array) {
        this.name = name;
        this.two_dim_array = two_dim_array;
    }
    Document.prototype.clone = function (mode) {
        var array;
        if (mode == 2) {
            var stringified = JSON.stringify(this.two_dim_array);
            console.log('stringified ' + stringified);
            //deep copy
            array = JSON.parse(stringified);
            console.log('array ' + array);
        }
        else {
            //shallow copy
            array = Object.assign([], this.two_dim_array);
        }
        return new Document(this.name, array);
    };
    return Document;
}());
exports.default = Document;
//# sourceMappingURL=document.js.map