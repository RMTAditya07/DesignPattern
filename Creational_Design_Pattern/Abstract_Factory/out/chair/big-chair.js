"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chair_1 = require("./chair");
var BigChair = /** @class */ (function (_super) {
    __extends(BigChair, _super);
    function BigChair() {
        var _this = _super.call(this) || this;
        _this.name = 'BigChair';
        _this.height = 80;
        _this.width = 80;
        _this.depth = 80;
        return _this;
    }
    return BigChair;
}(chair_1.Chair));
exports.default = BigChair;
//# sourceMappingURL=big-chair.js.map