import React, { useState, useEffect } from 'react';
import './App.css';
import { CellGrid } from './features/Game/CellGrid/CellGrid';
import { useDispatch, useSelector } from 'react-redux';
import { wordList } from './wordList';
import { RootState } from './app/store';
import { WinWindow } from './features/Game/WinWindow/WinWindow';
import { Keyboard } from './features/Game/Keyboard/Keyboard';
import { Navbar } from './features/Navbar/Navbar';

function App() {

  const winStatus = useSelector( (state: RootState) => state.win );

  return (
    <div className="App">
      <Navbar/>
      <CellGrid/>
      {
        winStatus
        &&
        <WinWindow win={true}/>
      }
      <Keyboard/>
    </div>
  );
}

export default App;
