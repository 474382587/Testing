import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaper from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({
  adapter: new EnzymeAdaper(),
});
// yarn add --save-dev enzyme jest-enzyme enzyme-adapter-react-16