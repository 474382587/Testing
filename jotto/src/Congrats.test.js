import React from 'react';

import { mount, shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';
import languageContext from './contexts/languageContext';

const setup = ({
  success = false, language = 'en'
} = {}) => {
  return mount(
  <languageContext.Provider value={language}>
    <Congrats success={success}/>
  </languageContext.Provider>
  )
};

describe('languagePicker', () => {
  
  test('correctly renders congrats string in english by default', () => {
    const wrapper = setup({success: true})
    
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!')
  })
  
  test('correctly renders congrats in emoji', () => {
    const wrapper = setup({success: true, language: 'emoji'})
    
    expect(wrapper.text()).toBe('🎯🎉')
  })
})

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text()).toBe('Congratulations! You guessed the word!');
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    success: false,
  };
  checkProps(Congrats, expectedProps);
});
