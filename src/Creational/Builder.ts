/*
    A design pattern that uses method chaining to avoid passing numerous and multiple argument to classes.
*/

class HotDog {
  constructor(
    public bun: string,
    public ketchup: boolean,
    public mustard: boolean,
    public kraut: boolean
  ) {}
}

new HotDog('wheat', false, true, true); // can be confusing when inserting values to constructor.

class HotDogBuilder {
  constructor(
    public bun: string,
    public ketchup: boolean = false,
    public mustard: boolean = false,
    public kraut: boolean = false
  ) {}

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
