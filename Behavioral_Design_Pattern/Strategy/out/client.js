class GameCharacter {
    constructor() {
        // This is the context whose strategy will change
        this.position = [0, 0];
        this.currentMovement = null;
    }
    setMovement(movementStyle) {
        this.currentMovement = new movementStyle();
    }
    move() {
        try {
            if (this.currentMovement) {
                this.currentMovement.move(this.position);
            }
            else {
                throw new Error('No movement strategy set.');
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }
}
class Walking {
    // A concrete movement strategy for walking
    move(position) {
        position[0] += 1;
        console.log(`I am Walking. New position = ${position}`);
    }
}
class Sprinting {
    // A concrete movement strategy for sprinting
    move(position) {
        position[0] += 2;
        console.log(`I am Running. New position = ${position}`);
    }
}
class Crawling {
    // A concrete movement strategy for crawling
    move(position) {
        position[0] += 0.5;
        console.log(`I am Crawling. New position = ${position} `);
    }
}
// The Client
const GAME_CHARACTER = new GameCharacter();
GAME_CHARACTER.setMovement(Walking); // Sets the movement style to Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
GAME_CHARACTER.setMovement(Crawling); // Sets the movement style to Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
GAME_CHARACTER.setMovement(Sprinting); // Sets the movement style to Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
GAME_CHARACTER.move(); // Uses the existing instance of Walking
//# sourceMappingURL=client.js.map