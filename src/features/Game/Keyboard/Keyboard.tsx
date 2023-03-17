import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { StyledKeyboard } from './Keyboard.style';
import { Cell } from '../../shared/Cell/Cell';

export const Keyboard = () => {

  const answer = useSelector( (state: RootState) => state.correctWord ).toUpperCase().split('');
  const clientWords = useSelector( (state: RootState) => state.stagesWords );
  const matchedLetters = useSelector( (state: RootState) => state.matchedLetter );

  let arrayOfAllClientWords = [ 
    ...clientWords.first.split(''),
    ...clientWords.second.split(''),
    ...clientWords.third.split(''),
    ...clientWords.fourth.split(''),
    ...clientWords.fifth.split(''),
    ...clientWords.sixth.split(''),
  ];

  const keyboardHighlightFirstLine = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї'];
  const keyboardHighlightSecondLine = ['Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є'];
  const keyboardHighlightThirdLine = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ґ'];

  const cellBgColor = (letter: string) => {

    if (
      (answer.filter( letterAnswer => letterAnswer === letter).length !== 0)
      &&
      (matchedLetters.greenLetters.filter( currentLetterMatched => currentLetterMatched === letter).length !== 0)
    ) {
      return '#79b851';
    } else if (
        (answer.filter( letterAnswer => letterAnswer === letter).length !== 0)
        &&
        (matchedLetters.yellowLetters.filter( currentLetterMatched => currentLetterMatched === letter).length !== 0)
      ) {
      return '#f3c237';
    } else if (arrayOfAllClientWords.filter(currentLetterMatched => currentLetterMatched === letter).length !== 0) {
      return '#a0a0a0';
    } else {
      return '#f5f5f5';
    };
  };

  const cellFontColor = (letter: string) => {

    if (arrayOfAllClientWords.filter(currentLetterMatched => currentLetterMatched === letter).length !== 0) {
      return '#f5f5f5';
    } else {
      return '#050505';
    };
  };

  return (
    <StyledKeyboard>
      <div>
      {
        keyboardHighlightFirstLine.map( (letter, index) => {
          return (
            <Cell key={index} letter={letter} color={{bgColor: cellBgColor(letter), textColor: cellFontColor(letter)}}/>
            );
        })
      }
      </div>
      <div>
      {
        keyboardHighlightSecondLine.map( (letter, index) => {
          return (
            <Cell key={index} letter={letter} color={{bgColor: cellBgColor(letter), textColor: cellFontColor(letter)}}/>
            );
        })
      }
      </div>
      <div>
      {
        keyboardHighlightThirdLine.map( (letter, index) => {
          return (
            <Cell key={index} letter={letter} color={{bgColor: cellBgColor(letter), textColor: cellFontColor(letter)}}/>
            );
        })
      }
      </div>
    </StyledKeyboard>
  );
};