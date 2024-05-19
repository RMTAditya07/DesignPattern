import { Observer } from "./interface/Observer";
import { Subject } from "./interface/Subject";


export class Product implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const removeIndex = this.observers.findIndex(obs => observer === obs);
        if (removeIndex !== -1) {
            this.observers.splice(removeIndex, 1);
        }else{
            console.log("Subscriber not found!")
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    restock(): void {
        this.notifyObservers();
    }
}