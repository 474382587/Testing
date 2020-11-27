import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success ? (
        <span data-test="congrats-message" className="alert alert-success">
          Congrats
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
