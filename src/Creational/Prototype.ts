/*
    Prototype / 'Clone'
*/

const zombie = {
  eatBrains() {
    return 'yum brains';
  }
};

const chad = Object.create(zombie, { name: { value: 'chad' } });

// You can only see the new added name property.
console.log(chad);
// The eatBrains() methods is still callable.
chad.eatBrains();

// Getting prototype of an object.
chad.__proto__; // old way.
Object.getPrototypeOf(chad); // modern way.
