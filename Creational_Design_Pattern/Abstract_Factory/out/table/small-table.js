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
var table_1 = require("./table");
var SmallTable = /** @class */ (function (_super) {
    __extends(SmallTable, _super);
    function SmallTable() {
        var _this = _super.call(this) || this;
        _this.name = 'SmallTable';
        _this.height = 40;
        _this.width = 40;
        _this.depth = 40;
        return _this;
    }
    return SmallTable;
}(table_1.Table));
exports.default = SmallTable;
//# sourceMappingURL=small-table.js.map