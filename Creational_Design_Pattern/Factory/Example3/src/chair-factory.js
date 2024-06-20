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
        else {
            return new small_chair_1.default();
        }
    };
    return ChairFactory;
}());
exports.default = ChairFactory;
