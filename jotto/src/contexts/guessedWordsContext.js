import React, { createContext, useContext, useMemo, useState } from 'react';

const guessWordsContext = createContext();

const useGuessedWords = () => {
  const context = useContext(guessWordsContext);

  if (!context) {
    throw new Error('no provider');
  }

  return context;
};

const GuessedWordsProvider = (props) => {
  const [guessWords, setGuessedWords] = useState([]);
  const value = useMemo(() => [guessWords, setGuessedWords], [guessWords]);

  return (
    <guessWordsContext.Provider value={value}></guessWordsContext.Provider>
  );
};

export default {
  GuessedWordsProvider,
  useGuessedWords,
};
