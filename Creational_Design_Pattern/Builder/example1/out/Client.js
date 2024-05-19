"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputerBuilder_1 = require("./ComputerBuilder");
var gamingComputer = new ComputerBuilder_1.ComputerBuilder("Gaming Motherboard", "Intel i7")
    .withMemory(16)
    .withStorage(1000)
    .withGraphicsCard("NVIDIA RTZ 3080")
    .withMonitor("27-inch 4K")
    .build();
var officeComputer = new ComputerBuilder_1.ComputerBuilder("Office Motherboard", "Intel i5")
    .withMemory(8)
    .withStorage(500)
    .withGraphicsCard("Integrated")
    .withMonitor("24-inch 1080p")
    .build();
// Display computer configurations
console.log("Gaming Computer: ");
gamingComputer.display();
console.log("Office Computer: ");
officeComputer.display();
//# sourceMappingURL=Client.js.map