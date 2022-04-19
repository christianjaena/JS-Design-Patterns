"use strict";
/*
    A design pattern that uses method chaining to avoid passing numerous and multiple argument to classes.
*/
class HotDog {
    constructor(bun, ketchup, mustard, kraut) {
        this.bun = bun;
        this.ketchup = ketchup;
        this.mustard = mustard;
        this.kraut = kraut;
    }
}
new HotDog('wheat', false, true, true); // can be confusing when inserting values to constructor.
class HotDogBuilder {
    constructor(bun, ketchup = false, mustard = false, kraut = false) {
        this.bun = bun;
        this.ketchup = ketchup;
        this.mustard = mustard;
        this.kraut = kraut;
    }
    addKetchup() {
        this.ketchup = true;
        return this; // returns this (the object itself) to be able to method chain.
    }
    addMustard() {
        this.mustard = true;
        return this;
    }
    addKraut() {
        this.kraut = true;
        return this;
    }
}
// const myLunch = new HotDog('gluten free');
// myLunch.addKetchup().addMustard().addKraut();
