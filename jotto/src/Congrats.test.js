import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaper from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtils';
import { checkPropTypes } from 'prop-types';

Enzyme.configure({
  adapter: new EnzymeAdaper(),
});
// yarn add --save-dev enzyme jest-enzyme enzyme-adapter-react-16

const defaultProps = {
  success: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

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
  expect(component.text()).toBe('Congrats');
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    success: false,
  };
  checkProps(Congrats, expectedProps);
});
