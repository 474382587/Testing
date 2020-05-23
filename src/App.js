import React from 'react';
import { init } from '@rematch/core'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';

import * as models from './models'
import Count from './Count'

const store = init({
  models
})


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Count />
        </header>
      </div>
    </Provider>
  );
}

export default App;
