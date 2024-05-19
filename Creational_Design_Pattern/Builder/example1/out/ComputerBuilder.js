"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerBuilder = void 0;
var Computer_1 = require("./Computer");
// Builder: ComputerBuilder
var ComputerBuilder = /** @class */ (function () {
    function ComputerBuilder(motherboard, processor) {
        this.memory = 4;
        this.storage = 256;
        this.graphicsCard = "Basic";
        this.monitor = "20-inch 1080p";
        this.motherboard = motherboard;
        this.processor = processor;
    }
    ComputerBuilder.prototype.withMemory = function (memory) {
        this.memory = memory;
        return this;
    };
    ComputerBuilder.prototype.withStorage = function (storage) {
        this.storage = storage;
        return this;
    };
    ComputerBuilder.prototype.withGraphicsCard = function (graphicsCard) {
        this.graphicsCard = graphicsCard;
        return this;
    };
    ComputerBuilder.prototype.withMonitor = function (monitor) {
        this.monitor = monitor;
        return this;
    };
    ComputerBuilder.prototype.build = function () {
        return new Computer_1.Computer(this.motherboard, this.processor, this.memory, this.storage, this.graphicsCard, this.monitor);
    };
    return ComputerBuilder;
}());
exports.ComputerBuilder = ComputerBuilder;
//# sourceMappingURL=ComputerBuilder.js.map