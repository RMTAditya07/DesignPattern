// The Chair Base Class
export default class Chair {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    getDimensions() {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    }
}
//# sourceMappingURL=chair.js.map