import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';
import strings from './helpers/strings';

const Congrats = ({ success }) => {
  const language = useContext(languageContext)
  return (
    <div data-test="component-congrats">
      {success ? (
        <span data-test="congrats-message" className="alert alert-success">
          {
            strings.getStringByLanguage(language, 'congrats')
          }
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
