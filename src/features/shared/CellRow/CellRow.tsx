import React, { useState } from 'react';
import { CellInput } from '../CellInput/CellInput';
import { Cell } from '../Cell/Cell';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { 
  setFirstWord, 
  setSecondWord, 
  setThirdWord, 
  setFourthWord, 
  setFifthWord, 
  setSixthWord 
} from '../../../app/slices/stagesWordsSlice';
import { 
  setFirstStatus, 
  setSecondStatus, 
  setThirdStatus, 
  setFourthStatus, 
  setFifthStatus, 
  setSixthStatus 
} from '../../../app/slices/stagesFillSlice';

interface IPropsFromCellGrid {
  statusRow: 'input' | 'emptyDiv' | 'filledDiv'
  stage?: number
  clientPreviousWord?: string
};

interface ICellRowProps {
  props: IPropsFromCellGrid
};

export const CellRow: React.FC<ICellRowProps> = ( {props}: ICellRowProps ) => {

  const correctWord = useSelector( (state: RootState) => state.correctWord );
  console.log(correctWord);
  
  const correctWordArray = correctWord.split('');

  const [ clientWordFromInputs, setClientWordFromInputs ] = useState(['', '', '', '', '',]);

  const handleChangeClientWordFromInputs = ( (letter: string, index: number) => {
    setClientWordFromInputs(prev => {
      const temporaryArray = clientWordFromInputs;
      temporaryArray[index] = letter; 
      console.log(clientWordFromInputs, temporaryArray);
      return [...temporaryArray];
    });
  });

  const dispatch = useDispatch();

  document.addEventListener('keypress', (e: KeyboardEvent) => {
    // console.log(e.key)
    // e.preventDefault();

    if ((e.key === 'Enter') && clientWordFromInputs.filter( letter => letter === '').length === 0 ) {
      console.log(clientWordFromInputs.join('') )
      console.log(correctWord.toUpperCase())

      e.preventDefault();
      if (clientWordFromInputs.join('') === correctWord.toUpperCase()) {
        console.log('word is correct. ', 'correctWord: ', correctWord.toUpperCase(), ', and your: ', clientWordFromInputs.join('') );



      } else { 
        console.log('word is NOT correct');

        if (props.stage === 1) { dispatch(setFirstWord(clientWordFromInputs.join(''))); dispatch(setFirstStatus(true)) };
        if (props.stage === 2) { dispatch(setSecondWord(clientWordFromInputs.join(''))); dispatch(setSecondStatus(true)) };
        if (props.stage === 3) { dispatch(setThirdWord(clientWordFromInputs.join(''))); dispatch(setThirdStatus(true)) };
        if (props.stage === 4) { dispatch(setFourthWord(clientWordFromInputs.join(''))); dispatch(setFourthStatus(true)) };
        if (props.stage === 5) { dispatch(setFifthWord(clientWordFromInputs.join(''))); dispatch(setFifthStatus(true)) };
        if (props.stage === 6) { dispatch(setSixthWord(clientWordFromInputs.join(''))); dispatch(setSixthStatus(true)) };

      };
    }
    
  });

  const checkClientWord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (clientWordFromInputs.join('') === correctWord) {
    //   console.log('word is correct');
    // } else { console.log('word is NOT correct') };
  };

  return (
    <div className='cellRow'>
      {/* <form onSubmit={checkClientWord}> */}
        {
          props.statusRow === 'input'
          // clientWordFromInputs.join('') !== correctWord
          ?
          correctWordArray.map( (letter, index) => {

            return (
              <CellInput 
                key={index} 
                letter={letter} 
                index={index}
                changeLetterFunction={handleChangeClientWordFromInputs} 
                color='#fff'
              />
            );
          })
          :
          props.statusRow === 'emptyDiv'
          ?
          correctWordArray.map( (letter, index) => {
            return (
              <Cell key={index} color='#f5f5f5'/>
            );
          })
          :
          props.clientPreviousWord?.split('').map( (letter, index) => {
            return (
              <Cell key={index} letter={letter} color='#f5f5f5'/>
            );
          })
        }
      {/* </form> */}
    </div>
  );
};