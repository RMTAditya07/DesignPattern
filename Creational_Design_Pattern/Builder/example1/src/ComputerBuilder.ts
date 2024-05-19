import { Computer } from "./Computer";

// Builder: ComputerBuilder
export class ComputerBuilder{
    motherboard: string;
    processor: string;
    memory: number = 4;
    storage: number = 256;
    graphicsCard: string = "Basic";
    monitor: string = "20-inch 1080p";

    constructor(motherboard: string, processor: string){
        this.motherboard = motherboard;
        this.processor = processor;
    }
    withMemory(memory: number): ComputerBuilder{
        this.memory = memory;
        return this;
    }
    withStorage(storage:number): ComputerBuilder{
        this.storage = storage;
        return this;
    }
    withGraphicsCard(graphicsCard: string): ComputerBuilder{
        this.graphicsCard = graphicsCard;
        return this;
    }
    withMonitor(monitor:string): ComputerBuilder{
        this.monitor = monitor;
        return this;
    }
    build(): Computer{
        return new Computer(
            this.motherboard,
            this.processor,
            this.memory,
            this.storage,
            this.graphicsCard,
            this.monitor,
        )
    }
}