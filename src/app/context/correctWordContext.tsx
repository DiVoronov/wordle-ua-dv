import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectWord } from '../slices/correctWordSlice';
import { wordList } from '../../wordList';
import { RootState } from '../store';
import { setWordsList } from '../slices/allWordsSlice';
export const CorrectWordContext = createContext('');

export const WordContext = ({ children }: any) => {

  const correctWord = useSelector( (state: RootState) => state.correctWord);
  const dispatch = useDispatch();
  useEffect( () => {
    const fiveLetterWordArray = wordList.filter( word => word.length === 5 );
    const fiveLetterWordWithoutApostropheAndDash = fiveLetterWordArray.filter( word => !word.match(/'/gmi) && !word.match(/-/gmi) );

    const randomWordIndex = Math.floor(Math.random() * (fiveLetterWordWithoutApostropheAndDash.length - 1));

    dispatch(setWordsList(fiveLetterWordWithoutApostropheAndDash))
    dispatch(setCorrectWord(fiveLetterWordWithoutApostropheAndDash[randomWordIndex]));
    console.log(fiveLetterWordWithoutApostropheAndDash[randomWordIndex]);
  }, []);

  return (
    <CorrectWordContext.Provider value={correctWord}>
      { children }
    </CorrectWordContext.Provider>
  )
};
