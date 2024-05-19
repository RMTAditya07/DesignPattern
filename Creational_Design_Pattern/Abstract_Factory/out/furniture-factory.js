"use strict";
// Abstract Furniture Factory
Object.defineProperty(exports, "__esModule", { value: true });
var chair_factory_1 = require("./chair/chair-factory");
var table_factory_1 = require("./table/table-factory");
var FurnitureFactory = /** @class */ (function () {
    function FurnitureFactory() {
    }
    // This indicates that the method might return either an IFurniture object (if furniture creation is successful) or undefined (if there's an error or the requested furniture type is not found).
    FurnitureFactory.getFurniture = function (furniture) {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return chair_factory_1.default.getChair(furniture);
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return table_factory_1.default.getTable(furniture);
            }
            throw new Error('No Factory Found');
        }
        catch (e) {
            console.log(e);
        }
    };
    return FurnitureFactory;
}());
exports.default = FurnitureFactory;
//# sourceMappingURL=furniture-factory.js.map