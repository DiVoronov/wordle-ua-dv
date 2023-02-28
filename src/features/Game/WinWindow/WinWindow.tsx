import React from 'react';
import { StyledWinWindow } from './WinWindow.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const WinWindow = () => {

  const answer = useSelector( (state: RootState) => state.correctWord );

  return (
    <StyledWinWindow>
      <div id='box-for-card'>
        <div> Congratulation! </div>
        <div> The answer is: <div id='answer'><strong>{answer}</strong></div>  </div>
      </div>
    </StyledWinWindow>
  );
};