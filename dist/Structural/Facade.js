"use strict";
/*
    Facade = face of a building.
    A simplified api(high-level) to hide low-level detail.
*/
class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v) { }
    turnOn() { }
    turnOff() { }
}
class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v) { }
    turnOn() { }
    turnOff() { }
}
class House {
    constructor() {
        this.plumbing = new PlumbingSystem();
        this.electrical = new ElectricalSystem();
    }
    turnOnSystems() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }
    shutDown() {
        this.plumbing.turnOff();
        this.electrical.turnOff();
    }
}
const client = new House();
client.turnOnSystems();
client.shutDown();
