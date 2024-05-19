"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var small_chair_1 = require("./small-chair");
var medium_chair_1 = require("./medium-chair");
var big_chair_1 = require("./big-chair");
var ChairFactory = /** @class */ (function () {
    function ChairFactory() {
    }
    ChairFactory.getChair = function (chair) {
        if (chair == 'BigChair') {
            return new big_chair_1.default();
        }
        else if (chair == 'MediumChair') {
            return new medium_chair_1.default();
        }
        else if (chair == 'SmallChair') {
            return new small_chair_1.default();
        }
        else {
            throw new Error('No Chair Found');
        }
    };
    return ChairFactory;
}());
exports.default = ChairFactory;
//# sourceMappingURL=chair-factory.js.map