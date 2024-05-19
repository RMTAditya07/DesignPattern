import { Computer,createComputer } from "./Computer";

// Builder: ComputerBuilder
export const createComputerBuilder = (motherboard: string,processor:string)=>{
    let memory =4; 
    let storage = 256;
    let graphicsCard ="";
    let monitor = "";

    const withMemory = (memorySize: number)=>{
        memory = memorySize;
        return builder;
    }
    const withStorage = (storageSize: number) => {
        storage = storageSize;
        return builder;
    }
    const withGraphicsCard= (card: string) => {
        graphicsCard = card;
        return builder;
    }
    const withMonitor = (monitorSpec: string) => {
        monitor = monitorSpec
        return builder;
    }

    const build = () : Computer => createComputer(
        motherboard,
        processor,
        memory,
        storage,
        graphicsCard,
        monitor
    )
    const builder = {
        withMemory,
        withStorage,
        withGraphicsCard,
        withMonitor,
        build
    }
    return builder
}