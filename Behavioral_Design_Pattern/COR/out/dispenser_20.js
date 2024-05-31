var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dispenser_20_successor;
// A dispenser of $20 notes
class Dispenser_20 {
    constructor() {
        // Dispenses $10s if applicable, otherwise continues to next successor
        _Dispenser_20_successor.set(this, void 0);
    }
    nextSuccessor(successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _Dispenser_20_successor, successor, "f");
    }
    handle(amount) {
        // Handle the dispensing of notes"
        if (amount >= 20) {
            const num = Math.floor(amount / 20);
            const remainder = amount % 20;
            console.log(`Dispensing ${num} $20 note`);
            if (remainder !== 0) {
                ;
                __classPrivateFieldGet(this, _Dispenser_20_successor, "f").handle(remainder);
            }
        }
        else {
            ;
            __classPrivateFieldGet(this, _Dispenser_20_successor, "f").handle(amount);
        }
    }
}
_Dispenser_20_successor = new WeakMap();
export default Dispenser_20;
//# sourceMappingURL=dispenser_20.js.map