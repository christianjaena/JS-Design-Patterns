"use strict";
/*
    CREATIONAL DESIGN PATTERN
    An Object that can be instantiated ONCE.
*/
class Settings {
    constructor() {
        this.mode = 'dark';
    }
    static getInstance() {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}
const settings = Settings.getInstance();
