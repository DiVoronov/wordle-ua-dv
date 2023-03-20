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

interface IGreenLetterGuessed {
  letter: string
  index: number
}

export const CellRow: React.FC<ICellRowProps> = ( {props}: ICellRowProps ) => {

  const correctWord = useSelector( (state: RootState) => state.correctWord );
  const wordsList = useSelector( (state: RootState) => state.allWords );
  
  const correctWordArray = correctWord.split('');

  const [ clientWordFromInputs, setClientWordFromInputs ] = useState(['', '', '', '', '',]);
  const [ classNameForAnimations, setClassNameForAnimations ] = useState('');

  // const [ clientWordGuessedLetterMention, setClientWordGuessedLetterMention ] = useState<string[]>([]);

  const handleChangeClientWordFromInputs = ( (letter: string, index: number) => {
    const temporaryArray = clientWordFromInputs;
    temporaryArray[index] = letter; 
    // console.log(clientWordFromInputs, temporaryArray);
    setClientWordFromInputs([...temporaryArray]);
  });

  const dispatch = useDispatch();

  const checkMatchInWordsList = useMemo( () => wordsList.find( element => element.toUpperCase() === clientWordFromInputs.join('')), [clientWordFromInputs] );

  document.addEventListener('keypress', (e: KeyboardEvent) => {

    if ((e.key === 'Enter') && clientWordFromInputs.filter( letter => letter === '').length === 0 ) {
      // console.log(clientWordFromInputs.join('') )
      // console.log(correctWord.toUpperCase())

      e.preventDefault();

      if (
        checkMatchInWordsList === undefined
      ) {
        setClassNameForAnimations('class-name-for-animations');
        setTimeout( () => setClassNameForAnimations(''), 1000);

      } else if (clientWordFromInputs.join('') === correctWord.toUpperCase()) {
        // console.log('word is correct. ', 'correctWord: ', correctWord.toUpperCase(), ', and your: ', clientWordFromInputs.join('') );

        dispatch(setWinStatus(true));

        if (props.stage === 1) { dispatch(setFirstWord(clientWordFromInputs.join(''))); dispatch(setFirstStatus(true)) };
        if (props.stage === 2) { dispatch(setSecondWord(clientWordFromInputs.join(''))); dispatch(setSecondStatus(true)) };
        if (props.stage === 3) { dispatch(setThirdWord(clientWordFromInputs.join(''))); dispatch(setThirdStatus(true)) };
        if (props.stage === 4) { dispatch(setFourthWord(clientWordFromInputs.join(''))); dispatch(setFourthStatus(true)) };
        if (props.stage === 5) { dispatch(setFifthWord(clientWordFromInputs.join(''))); dispatch(setFifthStatus(true)) };
        if (props.stage === 6) { dispatch(setSixthWord(clientWordFromInputs.join(''))); dispatch(setSixthStatus(true)) };

      } else { 
        // console.log('word is NOT correct');

        if (props.stage === 1) { dispatch(setFirstWord(clientWordFromInputs.join(''))); dispatch(setFirstStatus(true)) };
        if (props.stage === 2) { dispatch(setSecondWord(clientWordFromInputs.join(''))); dispatch(setSecondStatus(true)) };
        if (props.stage === 3) { dispatch(setThirdWord(clientWordFromInputs.join(''))); dispatch(setThirdStatus(true)) };
        if (props.stage === 4) { dispatch(setFourthWord(clientWordFromInputs.join(''))); dispatch(setFourthStatus(true)) };
        if (props.stage === 5) { dispatch(setFifthWord(clientWordFromInputs.join(''))); dispatch(setFifthStatus(true)) };
        if (props.stage === 6) { dispatch(setSixthWord(clientWordFromInputs.join(''))); dispatch(setSixthStatus(true)) };

      };
    }
    
  });

  const clientWordGuessedLetterMention: string[] = [];

  const cellBgColor = useCallback( (index: number) => {

    const clientWordArray = props.clientPreviousWord?.split('');
    
    if (clientWordArray![index] === correctWordArray[index].toUpperCase()) {
      
      try {
        clientWordGuessedLetterMention.push(clientWordArray![index]);
        dispatch(pushMatchedGreenLettersArray(clientWordArray![index]));
        return '#79b851';
      } catch (error) {
        clientWordGuessedLetterMention.push(clientWordArray![index]);
        // console.log('GREEN STRING ERROR: ', error);
        return '#79b851';
      };
      
    } else if (correctWordArray.filter( letter => letter.toUpperCase() === clientWordArray![index]).length !== 0) {
      
      try {

        if (correctWordArray.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 1) {
          if (clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 1) {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';

          } else if ((clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 2) && (clientWordGuessedLetterMention!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 0)) {

            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';
          } else if ((clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 3) && (clientWordGuessedLetterMention!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 0) ) {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';
          } else {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            return '#a0a0a0';
          }
          
        } else if (correctWordArray.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 2) {
          if (clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 1) {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';
          } else if (clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 2) {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';
          } else if ((clientWordArray!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length === 3) && (clientWordGuessedLetterMention!.filter( letter => letter.toUpperCase() === clientWordArray![index]).length < 3)) {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
            return '#f3c237';
          } else {
            clientWordGuessedLetterMention.push(clientWordArray![index]);
            return '#a0a0a0';
          }
        } else {
          clientWordGuessedLetterMention.push(clientWordArray![index]);
          dispatch(pushMatchedYellowLettersArray(clientWordArray![index]));
          return '#f3c237';
        }
        
      } catch (error) {
        clientWordGuessedLetterMention.push(clientWordArray![index]);
        // console.log('YELLOW STRING ERROR: ', error)
        return '#f3c237';
      }
      
    } else {
      clientWordGuessedLetterMention.push(clientWordArray![index]);
      return '#a0a0a0';
    };
  }, [props.clientPreviousWord]);

  useEffect( () => {
    document.getElementById(`cell-input-0`)?.focus();
  }, []);

  return (
    <div className='cellRow'>
        {
          props.statusRow === 'input'
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
    </div>
  );
};
