import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectWord } from '../slices/correctWordSlice';
import { wordList } from '../../wordList';
import { RootState } from '../store';
export const CorrectWordContext = createContext('');

export const WordContext = ({ children }: any) => {

  const currectWord = useSelector( (state: RootState) => state.correctWord);
  const dispatch = useDispatch();
  useEffect( () => {
    const fiveLetterWordArray = wordList.filter( word => word.length === 5 );
    const randomWordIndex = Math.floor(Math.random() * (fiveLetterWordArray.length - 1));

    dispatch(setCorrectWord(fiveLetterWordArray[randomWordIndex]));
    console.log(fiveLetterWordArray[randomWordIndex]);
  }, []);

  return (
    <CorrectWordContext.Provider value={currectWord}>
      { children }
    </CorrectWordContext.Provider>
  )
};
