import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    if (this.state.counter < 1) {
      return;
    }
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button onClick={this.increment} data-test="increment-button">
          increment by 1
        </button>
        <button onClick={this.decrement} data-test="decrement-button">
          decrement by 1
        </button>
      </div>
    );
  }
}

export default App;
