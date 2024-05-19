"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table() {
        this.name = '';
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    Table.prototype.getDimensions = function () {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    };
    return Table;
}());
exports.Table = Table;
//# sourceMappingURL=table.js.map