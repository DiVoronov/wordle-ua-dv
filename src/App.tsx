import React, { useState, useEffect } from 'react';
import './App.css';
import { CellGrid } from './features/Game/CellGrid/CellGrid';
import { useDispatch } from 'react-redux';
import { setCorrectWord } from './app/slices/correctWordSlice';
import { wordList } from './wordList';

function App() {

  // const dispatch = useDispatch();
  // useEffect( () => {
  //   const fiveLetterWordArray = wordList.filter( word => word.length === 5 );
  //   const randomWordIndex = Math.floor(Math.random() * (fiveLetterWordArray.length - 1));

  //   dispatch(setCorrectWord(fiveLetterWordArray[randomWordIndex]));
  //   console.log(fiveLetterWordArray[randomWordIndex]);
  // }, []);

  const changeWord = () => {
    const fiveLetterWordArray = wordList.filter( word => word.length === 5 );
    const randomWordIndex = Math.floor(Math.random() * (fiveLetterWordArray.length - 1));

    // dispatch(setCorrectWord(fiveLetterWordArray[randomWordIndex]));
    console.log(fiveLetterWordArray[randomWordIndex]);
  }

  return (
    <div className="App">
      <CellGrid/>

      <button onClick={changeWord}>change word</button>
    </div>
  );
}

export default App;
