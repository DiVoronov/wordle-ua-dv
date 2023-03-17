import React, { useState, useEffect } from 'react';
import './App.css';
import { CellGrid } from './features/Game/CellGrid/CellGrid';
import { useDispatch, useSelector } from 'react-redux';
import { wordList } from './wordList';
import { RootState } from './app/store';
import { WinWindow } from './features/Game/WinWindow/WinWindow';
import { Keyboard } from './features/Game/Keyboard/Keyboard';
import { Navbar } from './features/Navbar/Navbar';
import { HowToPlay } from './features/HowToPlay/HowToPlay';
import { useAppDispatch } from './app/hooks';
import { setInfoModuleAppear } from './app/slices/infoAppearSlice';

function App() {

  const winStatus = useSelector( (state: RootState) => state.win );
  const statusInfoModule = useSelector((state: RootState) => state.infoAppear);

  const dispatch = useAppDispatch();
  const handleInfoModuleAppearClose = () => {
    dispatch(setInfoModuleAppear(false));
  };
  
  return (
    <div className="App" style={{position: 'relative'}} onClick={handleInfoModuleAppearClose}>
      <Navbar/>
      <CellGrid/>
      {
        winStatus
        &&
        <WinWindow win={true}/>
      }
      <Keyboard/>
      {
        statusInfoModule && <HowToPlay/>
      }
    </div>
  );
}

export default App;
