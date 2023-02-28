import React, { useState, useRef } from 'react';

interface ICellInputProps {
  letter: string
  color?: string
  index: number
  clientWordFromInputs: string[]
  changeLetterFunction: (letter: string, index: number) => void
};

export const CellInput: React.FC<ICellInputProps> = ( { letter, changeLetterFunction, index, clientWordFromInputs }: ICellInputProps ) => {

  const inputRef: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

  // console.log(inputRef.current!.nextSibling)
  // console.log(inputRef.current!.previousSibling)

  
  // let counterLetterForFocusFunction = {prev: '', curr: ''};
  // let indexForFocusFunction = -1;

  // for (let i = 0; (i <= clientWordFromInputs.length - 1) || (indexForFocusFunction !== -1); i++) {
  //   counterLetterForFocusFunction.curr = clientWordFromInputs[i];
  //   console.log('index cycle: ', i, '; indexForFocusFunction: ', indexForFocusFunction)
  //   if (!counterLetterForFocusFunction.curr && counterLetterForFocusFunction.prev) {
  //     indexForFocusFunction = i;
  //   };
  // };

  // if (indexForFocusFunction === index) {
  //   inputRef.current!.focus();
  // };

  // for (let i of clientWordFromInputs) {
  //   counterLetterForFocusFunction.curr = i;
    // !counterLetterForFocusFunction.curr && counterLetterForFocusFunction.prev && 
  // };

  // if (clientWordFromInputs) {

  // };


  const [ value, setValue ] = useState('');

  const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (
        e.currentTarget.value.length <= 1 
        && 
        (
          (e.currentTarget.value.match(/[А-Яа-я]/gmi)) 
          ||
          (e.currentTarget.value === '')
          ||
          (e.currentTarget.value.match(/і/gmi))
          ||
          (e.currentTarget.value.match(/ї/gmi))
          ||
          (e.currentTarget.value.match(/є/gmi))
        )
        &&
        (
          e.currentTarget.value !== 'ы'
          &&
          e.currentTarget.value !== 'э'
          &&
          e.currentTarget.value !== 'ъ'
        )
      ) {
        console.log('handle FN was called ');
        setValue(e.currentTarget.value.toUpperCase());
        changeLetterFunction( e.currentTarget.value.toUpperCase(), index );
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Tab',
        }))
    };

    // if ( (inputRef!.current!.nextSibling as HTMLElement) && inputRef.current!.value) {console.log(inputRef.current!.nextSibling.focus())}
    // inputRef && inputRef.current!.blur();

  };

  const changeFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const nextElement = document.querySelector(`#cell-input-${index}`)?.nextSibling as HTMLInputElement;
    const previousElement = document.querySelector(`#cell-input-${index}`)?.previousSibling as HTMLInputElement;

    if (((e.key === 'Backspace') || (e.key === 'ArrowLeft')) && previousElement) { 
      previousElement.focus();
    } else if (nextElement) {
      nextElement.focus();
    }
  };


  return (
    <input 
      className={`cellInput`} 
      id={`cell-input-${index}`}
      type='text' 
      onChange={handleValueInput}
      value={value}
      maxLength={1}
      // autoFocus
      ref={inputRef}
      onKeyUp={(e) => changeFocus(e)}
    >

    </input>    
  );
};
