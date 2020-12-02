import React from 'react';
import PropTypes from 'prop-types';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    {
      code: 'en',
      symbol: 'EN',
    },
    {
      code: 'emoji',
      symbol: 'EMOJI',
    },
  ];
  const languageIcons = languages.map((lang, key) => (
    <span key={key} data-test="language-icon" onClick={() => {
      setLanguage(lang.code)
    }}>
      {lang.symbol}
    </span>
  ));
  return <div data-test="component-language-picker">{languageIcons}</div>;
};

export default LanguagePicker;

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};
