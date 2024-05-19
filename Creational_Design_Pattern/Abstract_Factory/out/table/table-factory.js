"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var small_table_1 = require("./small-table");
var medium_table_1 = require("./medium-table");
var big_table_1 = require("./big-table");
var TableFactory = /** @class */ (function () {
    function TableFactory() {
    }
    TableFactory.getTable = function (table) {
        if (table === 'BigTable') {
            return new big_table_1.default();
        }
        else if (table === 'MediumTable') {
            return new medium_table_1.default();
        }
        else if (table === 'SmallTable') {
            return new small_table_1.default();
        }
        else {
            throw new Error('No Table Found');
        }
    };
    return TableFactory;
}());
exports.default = TableFactory;
//# sourceMappingURL=table-factory.js.map