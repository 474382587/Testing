// import React from 'react';
// import { shallow } from 'enzyme';

// import { storeFactory } from '../test/testUtils';
// import App, { UnconnectedApp } from './App';

// const setup = (state = {}) => {
//   const store = storeFactory(state);
//   const wrapper = shallow(<App store={store} />)
//     .dive()
//     .dive();
//   return wrapper;
// };

// describe('redux properties', () => {
//   test('has access to success state', () => {
//     const success = true;
//     const wrapper = setup({ success });
//     const successProp = wrapper.instance().props.success;
//     expect(successProp).toBe(success);
//   });
//   test('has access to secretWord state', () => {
//     const secretWord = 'party';
//     const wrapper = setup({ secretWord });
//     const secretWordProp = wrapper.instance().props.secretWord;
//     expect(secretWordProp).toBe(secretWord);
//   });

//   test('has access to guessedWords state', () => {
//     const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
//     const wrapper = setup({ guessedWords });
//     const guessedWordsProp = wrapper.instance().props.guessedWords;
//     expect(guessedWordsProp).toBe(guessedWords);
//   });

//   test('getSecretWord action creator is a function on the props', () => {
//     const wrapper = setup();
//     const getSecretWordProp = wrapper.instance().props.getSecretWord;
//     expect(getSecretWordProp).toBeInstanceOf(Function);
//   });
// });

// test('getsecretword runs on app mount', () => {
//   const getSecretWordMock = jest.fn();
//   const props = {
//     getSecretWord: getSecretWordMock,
//     success: false,
//     guessedWords: [],
//   };
//   const wrapper = shallow(<UnconnectedApp {...props} />);

//   wrapper.instance().componentDidMount();
//   // expect()
//   const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;
//   expect(getSecretWordMockCallCount).toBe(1);
// });

import React from 'react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([
    {
      secretWord,
    },
    jest.fn(),
  ]);
  React.useReducer = mockUseReducer;

  return mount(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });
  test('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(true);
  });
  test('does not render app when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'component-spinner');
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe('secretWord is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test('does not render app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  });
  test('renders spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'component-spinner');
    expect(spinnerComponent.exists()).toBe(true);
  });
});
