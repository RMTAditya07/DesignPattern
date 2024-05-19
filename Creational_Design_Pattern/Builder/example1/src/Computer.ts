// Product: Computer
export class Computer{
    constructor(
        private motherboard: string,
        private processor: string,
        private memory: number,
        private storage: number,
        private graphicsCard: string,
        private monitor: string,
    ){}

    display(): void{
        console.log([
            `Computer Configuration:`,
            `Motherboard: ${this.motherboard}`,
            `Processor: ${this.processor}`,
            `Memory: ${this.memory} GB`,
            `Storage: ${this.storage} GB`,
            `Graphics Card: ${this.graphicsCard}`,
            `Monitor: ${this.monitor}`,
        ].join('\n\t'));
    }
}