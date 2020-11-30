// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { guessWord } from '../src/actions/index';
// export class UnconnectedInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentGuess: null,
//     };
//   }
//   submitGuessWord = (e) => {
//     e.preventDefault();
//     const guessedWord = this.state.currentGuess;
//     if (guessedWord && guessedWord.length > 0) {
//       this.props.guessWord(this.state.currentGuess);
//       this.setState({
//         currentGuess: '',
//       });
//     }
//   };
//   render() {
//     const contents = this.props.success ? null : (
//       <form className="form-inline">
//         <input
//           className="mb-2 mx-sm-3"
//           data-test="input-box"
//           placeholder="enter guess"
//           value={this.state.currentGuess}
//           onChange={(e) => {
//             this.setState({
//               ...this.state,
//               currentGuess: e.target.value,
//             });
//           }}
//         />
//         <button
//           data-test="submit-button"
//           type="submit"
//           className="btn btn-primary mb-2"
//           onClick={this.submitGuessWord}
//         >
//           Submit
//         </button>
//       </form>
//     );
//     return <div data-test="component-input">{contents}</div>;
//   }
// }
// const mapStateToProps = ({ success }) => {
//   return {
//     success,
//   };
// };

// export default connect(mapStateToProps, {
//   guessWord,
// })(UnconnectedInput);

import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          className="mb-2 mx-sm-3"
          data-test="input-box"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => {
            setCurrentGuess(e.target.value);
          }}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault()
            setCurrentGuess('')
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
