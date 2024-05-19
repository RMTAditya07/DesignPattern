import { ComputerBuilder } from "./ComputerBuilder";

const gamingComputer = new ComputerBuilder("Gaming Motherboard","Intel i7")
.withMemory(16)
.withStorage(1000)
.withGraphicsCard("NVIDIA RTZ 3080")
.withMonitor("27-inch 4K")
.build();

const officeComputer = new ComputerBuilder("Office Motherboard","Intel i5")
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

