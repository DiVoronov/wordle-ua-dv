import React, { useState, useRef } from 'react';

interface ICellInputProps {
  letter: string
  color?: string
  index: number
  clientWordFromInputs: string[]
  changeLetterFunction: (letter: string, index: number) => void
  classNameForAnimations?: string
};

export const CellInput: React.FC<ICellInputProps> = ( { letter, changeLetterFunction, index, clientWordFromInputs, classNameForAnimations }: ICellInputProps ) => {

  const inputRef: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

  const [ value, setValue ] = useState('');

  const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (e.currentTarget.value === '') {
      setValue(e.currentTarget.value);
      changeLetterFunction( e.currentTarget.value, index );
    } else if (
        e.currentTarget.value.length <= 1 
        && 
        (
          (e.currentTarget.value.match(/[А-Яа-я]/gmi)) 
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
    };
  };

  const changeFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const nextElement = document.querySelector(`#cell-input-${index}`)?.nextSibling as HTMLInputElement;
    const previousElement = document.querySelector(`#cell-input-${index}`)?.previousSibling as HTMLInputElement;

    if (((e.key === 'Backspace') || (e.key === 'ArrowLeft')) && previousElement) { 
      previousElement.focus();
    } else if (nextElement && ((e.key === 'ArrowRight') || e.key.match(/[А-Яа-я]/gmi) || e.key.match(/ї/gmi) || e.key.match(/є/gmi) || e.key.match(/і/gmi))) {
      nextElement.focus();
    }
  };


  return (
    <input 
      className={`cellInput ${classNameForAnimations}`} 
      id={`cell-input-${index}`}
      type='text' 
      onChange={handleValueInput}
      value={value}
      maxLength={1}
      ref={inputRef}
      onKeyUp={(e) => changeFocus(e)}
      autoComplete='off'
    >

    </input>    
  );
};
