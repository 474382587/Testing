import React, { Component } from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: 'train',
              letterMatchCount: 3,
            },
            {
              guessedWord: 'agile',
              letterMatchCount: 3,
            },
            {
              guessedWord: 'party',
              letterMatchCount: 3,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
