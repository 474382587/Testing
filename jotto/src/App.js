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

import React from 'react';
const App = () => {
  return <div data-test="component-app"></div>;
};
export default App;
