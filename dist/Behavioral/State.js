"use strict";
/*
    An object behaves differently based on finite number of states.
*/
class Human {
    think(mood) {
        switch (mood) {
            case 'Happy':
                return 'I am happy';
            case 'Sad':
                return 'I am sad';
            default:
                return 'I am neutral';
        }
    }
}
class HappyState {
    think() {
        return 'I am happy';
    }
}
class SadState {
    think() {
        return 'I am sad';
    }
}
class HumanState {
    constructor() {
        this.state = new HappyState();
    }
    think() {
        return this.state.think();
    }
    changeState(state) {
        this.state = state;
    }
}
