import { createComputerBuilder } from "./ComputerBuilder";

const gamingComputer = createComputerBuilder("Gaming Motherboard", "Intel i7")
  .withMemory(6)
  .withStorage(1000)
  .withGraphicsCard("NVIDIA RTX 3080")
  .withMonitor("27-inch 4K")
  .build();

const officeComputer = createComputerBuilder("Office Motherboard", "Intel i5")
  .withMemory(8)
  .withStorage(500)
  .withGraphicsCard("Integrated")
  .withMonitor("24-inch 1080p")
  .build();

// Display computer configurations
console.log("Gaming Computer:");
gamingComputer.display();

console.log("Office Computer:");
officeComputer.display();