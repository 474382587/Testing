// import React from 'react';
// import { shallow } from 'enzyme';
// import { findByTestAttr, storeFactory } from '../test/testUtils';

// import Input, { UnconnectedInput } from './Input';

// const setup = (initialState = {}) => {
//   const store = storeFactory(initialState);
//   const wrapper = shallow(<Input store={store} />)
//     .dive()
//     .dive();
//   // console.log(wrapper.debug());
//   return wrapper;
// };
// describe('render', () => {
//   describe('word has not been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: false };
//       wrapper = setup(initialState);
//     });
//     test('renders component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input');
//       expect(component.length).toBe(1);
//     });
//     test('renders input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.length).toBe(1);
//     });
//     test('renders submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.length).toBe(1);
//     });
//   });
//   describe('word has been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: true };
//       wrapper = setup(initialState);
//     });
//     test('renders component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input');
//       expect(component.length).toBe(1);
//     });
//     test('does not render input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.length).toBe(0);
//     });
//     test('does not render submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.length).toBe(0);
//     });
//   });
// });

// describe('redux props', () => {
//   test('has success piece of state as prop', () => {
//     const success = true;
//     const wrapper = setup({ success });
//     const successProp = wrapper.instance().props.success;
//     expect(successProp).toBe(success);
//   });
//   test('guessword action creator is a function prop', () => {
//     const wrapper = setup();
//     const guessWordProp = wrapper.instance().props.guessWord;
//     expect(guessWordProp).toBeInstanceOf(Function);
//   });
// });

// describe('update state', () => {
//   let guessWordMock
//   let wrapper
//   const guessWord = 'train'
//   beforeEach(() => {
//     guessWordMock = jest.fn()
//     const props = {
//       guessWord: guessWordMock,
//     }
//     wrapper = shallow(<UnconnectedInput {...props} />)
//     wrapper.setState({
//       currentGuess: guessWord
//     })
//     const submitButton = findByTestAttr(wrapper, 'submit-button')
//     submitButton.simulate('click', {preventDefault: () => {}})
//   })
//   test('guessword calls on submit', () => {
//     const guessWordMockCallCount = guessWordMock.mock.calls.length
//     expect(guessWordMockCallCount).toBe(1);
//   })
//   test('guessword calls on submit with arg', () => {
//     const guessWordArg = guessWordMock.mock.calls[0][0]
//     expect(guessWordArg).toBe(guessWord);
//   })
//   test('clear inputbox on submit', () => {
//     expect(wrapper.state('currentGuess')).toBe('')
//   })
// });

import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
