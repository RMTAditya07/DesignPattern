// The ATM Dispenser Chain

import Dispenser_10 from './dispenser_10'
import Dispenser_20 from './dispenser_20'
import Dispenser_50 from './dispenser_50'

export default class ATMDispenserChain {
    chain1: Dispenser_50
    chain2: Dispenser_20
    chain3: Dispenser_10

    constructor() {
        // initializing the successors chain
        this.chain1 = new Dispenser_50()
        this.chain2 = new Dispenser_20()
        this.chain3 = new Dispenser_10()
        // Setting a default successor chain that will process the 50s first,
        // the 20s second and the 10s last.The successor chain will be
        // recalculated dynamically at runtime.
        this.chain1.nextSuccessor(this.chain2)
        this.chain2.nextSuccessor(this.chain3)
    }
}