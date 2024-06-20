"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The Chair Base Class
var Chair = /** @class */ (function () {
    function Chair() {
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    Chair.prototype.getDimensions = function () {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    };
    return Chair;
}());
exports.default = Chair;
