"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
// Product: Computer
var Computer = /** @class */ (function () {
    function Computer(motherboard, processor, memory, storage, graphicsCard, monitor) {
        this.motherboard = motherboard;
        this.processor = processor;
        this.memory = memory;
        this.storage = storage;
        this.graphicsCard = graphicsCard;
        this.monitor = monitor;
    }
    Computer.prototype.display = function () {
        console.log([
            "Computer Configuration:",
            "Motherboard: ".concat(this.motherboard),
            "Processor: ".concat(this.processor),
            "Memory: ".concat(this.memory, " GB"),
            "Storage: ".concat(this.storage, " GB"),
            "Graphics Card: ".concat(this.graphicsCard),
            "Monitor: ".concat(this.monitor),
        ].join('\n\t'));
    };
    return Computer;
}());
exports.Computer = Computer;
//# sourceMappingURL=Computer.js.map