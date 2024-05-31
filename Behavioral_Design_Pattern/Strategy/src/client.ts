class GameCharacter {
    // This is the context whose strategy will change

    position: [number, number] = [0, 0];
    private currentMovement: IMove | null = null;

    setMovement(movementStyle: IMoveConstructor) {
        this.currentMovement = new movementStyle();
    }

    move() {
        try {
            if (this.currentMovement) {
                this.currentMovement.move(this.position);
            } else {
                throw new Error('No movement strategy set.');
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

interface IMoveConstructor {
    // A Constructor for the IMove
    new (): IMove;
}

interface IMove {
    // The Move Strategy Interface
    move(position: [number, number]): void;
}

class Walking implements IMove {
    // A concrete movement strategy for walking

    move(position: [number, number]) {
        position[0] += 1;
        console.log(`I am Walking. New position = ${position}`);
    }
}

class Sprinting implements IMove {
    // A concrete movement strategy for sprinting

    move(position: [number, number]) {
        position[0] += 2;
        console.log(`I am Running. New position = ${position}`);
    }
}

class Crawling implements IMove {
    // A concrete movement strategy for crawling

    move(position: [number, number]) {
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
