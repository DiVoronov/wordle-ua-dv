import React, { useState } from 'react';

interface ICellInputProps {
  letter: string
  color?: string
  index: number
  changeLetterFunction: (letter: string, index: number) => void
};

export const CellInput: React.FC<ICellInputProps> = ( { letter, changeLetterFunction, index }: ICellInputProps ) => {

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
  };

  return (
    <input 
      className='cellInput' 
      type='text' 
      onChange={handleValueInput}
      value={value}
    >

    </input>    
  );
};
