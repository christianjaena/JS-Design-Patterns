/*
    An object behaves differently based on finite number of states.
*/

class Human {
  think(mood: any) {
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

// Better example
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy';
  }
}

class SadState implements State {
  think() {
    return 'I am sad';
  }
}

class HumanState {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  think() {
    return this.state.think();
  }

  changeState(state: State) {
    this.state = state;
  }
}
