"use strict";
/*
    Mediator / Middleman / Broker
*/
class Airplane {
    land() { }
}
class Runway {
    constructor() {
        this.clear = false;
    }
}
// Many-to-many relationship
// const runway25A = new Runway();
// const runway25B = new Runway();
// const runway7 = new Runway();
// const a = new Airplane();
// const b = new Airplane();
// const c = new Airplane();
// Middleman between Airplane and Runway
class Tower {
    clearForLanding(runway, plane) {
        if (runway.clear) {
            console.log(`Plane ${plane} is clear for landing.`);
        }
    }
}
// Better example
// import express from 'express';
// const app = express();
// function logger(req, res, next) {
//     console.log('Request Type: ', req.method)
//     next()
// }
// app.use(logger);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get('/about', (req, res) => {
//   res.send('About');
// });
