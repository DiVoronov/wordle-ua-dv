import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
import { setWinStatus } from '../../../app/slices/winSlice';
import { pushMatchedGreenLettersArray, pushMatchedYellowLettersArray  } from '../../../app/slices/matchedLetterSlice';

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
  const wordsList = useSelector( (state: RootState) => state.allWords );
  
  const correctWordArray = correctWord.split('');

  const [ clientWordFromInputs, setClientWordFromInputs ] = useState(['', '', '', '', '',]);
  const [ classNameForAnimations, setClassNameForAnimations ] = useState('');
  // const [ resultOfCheckMatchInWordsList, setResultOfCheckMatchInWordsList ] = useState<string | undefined>('');
  
  // let classNameForAnimations = '';

  const handleChangeClientWordFromInputs = ( (letter: string, index: number) => {
    const temporaryArray = clientWordFromInputs;
    temporaryArray[index] = letter; 
    console.log(clientWordFromInputs, temporaryArray);
    setClientWordFromInputs([...temporaryArray]);
  });

  const dispatch = useDispatch();

  const checkMatchInWordsList = useMemo( () => wordsList.find( element => element.toUpperCase() === clientWordFromInputs.join('')), [clientWordFromInputs] );

  document.addEventListener('keypress', (e: KeyboardEvent) => {
    // console.log(e.key)
    // e.preventDefault();

    if ((e.key === 'Enter') && clientWordFromInputs.filter( letter => letter === '').length === 0 ) {
      console.log(clientWordFromInputs.join('') )
      console.log(correctWord.toUpperCase())

      e.preventDefault();

      if (
        checkMatchInWordsList === undefined
      ) {
        setClassNameForAnimations('class-name-for-animations');
        setTimeout( () => setClassNameForAnimations(''), 1000);
        // classNameForAnimations = 'class-name-for-animations';
        // setTimeout( () => classNameForAnimations = '', 500);


      } else if (clientWordFromInputs.join('') === correctWord.toUpperCase()) {
        console.log('word is correct. ', 'correctWord: ', correctWord.toUpperCase(), ', and your: ', clientWordFromInputs.join('') );

        dispatch(setWinStatus(true));

        if (props.stage === 1) { dispatch(setFirstWord(clientWordFromInputs.join(''))); dispatch(setFirstStatus(true)) };
        if (props.stage === 2) { dispatch(setSecondWord(clientWordFromInputs.join(''))); dispatch(setSecondStatus(true)) };
        if (props.stage === 3) { dispatch(setThirdWord(clientWordFromInputs.join(''))); dispatch(setThirdStatus(true)) };
        if (props.stage === 4) { dispatch(setFourthWord(clientWordFromInputs.join(''))); dispatch(setFourthStatus(true)) };
        if (props.stage === 5) { dispatch(setFifthWord(clientWordFromInputs.join(''))); dispatch(setFifthStatus(true)) };
        if (props.stage === 6) { dispatch(setSixthWord(clientWordFromInputs.join(''))); dispatch(setSixthStatus(true)) };

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

  const cellBgColor = useCallback( (index: number) => {

    const clientWordArray = props.clientPreviousWord?.split('');

    if (clientWordArray![index] === correctWordArray[index].toUpperCase()) {
      // console.log('first IF: ', clientWordArray![index], correctWordArray[index]);
      
      try {
        dispatch(pushMatchedGreenLettersArray(clientWordArray![index]));
        return '#79b851';
      } catch (error) {
        console.log('GREEN STRING ERROR: ', error)
        return '#79b851';
      }
      
    } else if (correctWordArray.filter( letter => letter.toUpperCase() === clientWordArray![index]).length !== 0) {
      // console.log('second IF: ', correctWordArray.filter( letter => letter === clientWordArray[index]));
      
      try {
        dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
        return '#f3c237';
      } catch (error) {
        console.log('YELLOW STRING ERROR: ', error)
        return '#f3c237';
      }
      
    } else {
      // console.log('ELSE')
      return '#a0a0a0';
    };
  }, [props.clientPreviousWord]);

  useEffect( () => {
    document.getElementById(`cell-input-0`)?.focus();

    // return () => setClassNameForAnimations('');
  }, []);

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
                clientWordFromInputs={clientWordFromInputs}
                color='#fff'
                // color='#d14141'
                classNameForAnimations={classNameForAnimations}
              />
            );
          })
          :
          props.statusRow === 'emptyDiv'
          ?
          correctWordArray.map( (letter, index) => {
            return (
              <Cell key={index} color={{bgColor: '#f5f5f5'}}/>
            );
          })
          :
          props.clientPreviousWord?.split('').map( (letter, index) => {
            return (
              <Cell key={index} letter={letter} color={{bgColor: cellBgColor(index), textColor: '#fff'}}/>
            );
          })
        }
      {/* </form> */}
    </div>
  );
};
