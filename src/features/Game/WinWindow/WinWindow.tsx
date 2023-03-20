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
          <div> Вітаємо! </div>
          :
          <div> Нажаль, ви не вгадали! </div>
        }
        
        <div> 
          Правильна відповідь: <div style={{ color: `${win ? '#79b851' : '#d14141'}`}}><strong>{answer}</strong></div>  
        </div>
        
        <div> Ви можете перевірити вказане слово у словнику: <a href='http://sum.in.ua/' target='blank' style={{color: `${win ? '#79b851' : '#d14141'}`}}>за посиланням</a>.</div>
      </div>
    </StyledWinWindow>
  );
};