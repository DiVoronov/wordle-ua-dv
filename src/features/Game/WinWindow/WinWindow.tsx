import React from 'react';
import { StyledWinWindow } from './WinWindow.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

interface IWinWindowProps {
  win: boolean
}

export const WinWindow = ({ win }: IWinWindowProps) => {

  const answer = useSelector( (state: RootState) => state.correctWord );

  return (
    <StyledWinWindow>
      <div id='box-for-card'>
        {
          win 
          ?
          <div> Congratulation! </div>
          :
          <div> Unfortunately, you lose! </div>
        }
        
        <div> 
          The answer is: <div style={{ color: `${win ? '#79b851' : '#d14141'}`}}><strong>{answer}</strong></div>  
        </div>
        
        <div> You can check the word by <a href='http://sum.in.ua/' target='blank'>link</a>.</div>
      </div>
    </StyledWinWindow>
  );
};