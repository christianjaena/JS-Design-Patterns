/*
    Proxy = 'Substitute'
*/

const original = { name: 'jeff' };

const reactive = new Proxy(original, {
  get(target: any, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target: any, key, value) {
    console.log('updating UI ... ');
    return Reflect.set(target, key, value);
  }
});

reactive.name;
reactive.name = 'bob';