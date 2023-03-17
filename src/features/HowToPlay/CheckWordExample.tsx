import React from 'react';
import { Cell } from '../shared/Cell/Cell';

interface IWordExample {
  letter: string
  role: string
}

interface ICheckWordExampleProps {
  word: IWordExample[]
}
export const CheckWordExample: React.FC<ICheckWordExampleProps> = ({ word }) => {

  return (
    <>
      {
        word.map( (letter, index) => {
          if (letter.role === 'correct') {
            return <Cell key={index} color={{bgColor: '#79b851', textColor: '#fff'}} letter={letter.letter}/>
          } else if (letter.role === 'near') {
            return <Cell key={index} color={{bgColor: '#f3c237', textColor: '#fff'}} letter={letter.letter}/>
          } else if (letter.role === 'incorrect') {
            return <Cell key={index} color={{bgColor: '#fff', textColor: '#454545'}} letter={letter.letter}/>
          } else {
            return <Cell key={index} color={{bgColor: '#a0a0a0', textColor: '#fff'}} letter={letter.letter}/>
          }
        })
      }
    </>
  )
  
};
