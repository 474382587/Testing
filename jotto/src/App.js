// import React, { Component } from 'react';
// import Congrats from './Congrats';
// import GuessedWords from './GuessedWords';
// import { connect } from 'react-redux';
// import { getSecretWord } from './actions/index';
// import Input from './Input';

// import './App.css';

// export class UnconnectedApp extends Component {
//   componentDidMount() {
//     this.props.getSecretWord()
//   }
//   render() {
//     return (
//       <div className="container">
//         <h1>Jotto</h1>
//         <Congrats success={this.props.success} />
//         <Input />
//         <GuessedWords
//           guessedWords={this.props.guessedWords}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     success: state.success,
//     guessedWords: state.guessedWords,
//     secretWord: state.secretWord,
//   };
// };

// export default connect(mapStateToProps, {
//   getSecretWord,
// })(UnconnectedApp);

import React, { useEffect } from 'react';
import hookActions from './actions/hookActions';
import Input from './Input';
const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return {
        ...state,
        secretWord: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
  });

  const setSecretWord = (secretWord) => {
    dispatch({
      type: 'setSecretWord',
      payload: secretWord,
    });
  };

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if(!state.secretWord) {
    return <div className="container" data-test="component-spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading</span>
      </div>
      <p>Loading secret word</p>
    </div>
  }
  return (
    <div data-test="component-app">
      <Input secretWord={state.secretWord || ''}/>
    </div>
  );
};
export default App;
