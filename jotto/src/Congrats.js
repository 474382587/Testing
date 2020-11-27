import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success ? (
        <span data-test="congrats-message">Congrats</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

Congrats.propTypes = {}

export default Congrats;
