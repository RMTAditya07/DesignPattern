// Product : Computer
export type Computer = {
    motherboard : string;
    processor : string;
    memory: number;
    storage: number;
    graphicsCard : string;
    monitor: string;
    display(): void;
}

export const createComputer = (
    motherboard: string, 
    processor: string,
    memory: number,
    storage: number,
    graphicsCard: string, 
    monitor: string,
): Computer => ({
    motherboard,
    processor,
    memory,
    storage,
    graphicsCard,
    monitor,
    display: function():  void{
        console.log([
            `Computer Configuration:`,
            `Motherboard: ${motherboard}`,
            `Processor: ${processor}`,
            `Memory: ${memory} GB`,
            `Storage: ${storage} GB`,
            `Graphics Card: ${graphicsCard}`,
            `Monitor: ${monitor}`
        ].join('\n\t'))
    }
})