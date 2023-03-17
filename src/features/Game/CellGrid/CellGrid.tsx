import React from 'react';
import { CellRow } from '../../shared/CellRow/CellRow';
import { StyledCellGrid } from './CellGrid.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { WinWindow } from '../WinWindow/WinWindow';

export const CellGrid: React.FC = ( ) => {

  const stagesStatus = useSelector( (state: RootState) => state.stagesFill );
  const previousClientsWord = useSelector( (state: RootState) => state.stagesWords );
  const correctWord = useSelector( (state: RootState) => state.correctWord );

  const firstStepArray = [1, 2, 3, 4, 5];
  const secondStepArray = [1, 2, 3, 4];
  const thirdStepArray = [1, 2, 3];
  const fourthStepArray = [1, 2];
  const fifthStepArray = [1];

  return (
    <StyledCellGrid className='cellGrid'>
      {
        !stagesStatus.first
        &&
        <>
          <CellRow props={ { statusRow: 'input', stage: 1 } }/>
          {
            firstStepArray.map( (step, index) => {
              return (
                <CellRow key={index} props={ { statusRow: 'emptyDiv' } }/>
              );
            })
          }
        </>
      }

      {
        (stagesStatus.first && !stagesStatus.second)
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { statusRow: 'input', stage: 2 } }/>
          {
            secondStepArray.map( (step, index) => {
              return (
                <CellRow key={index} props={ { statusRow: 'emptyDiv' } }/>
              );
            })
          }
        </>
      }

      {
        (stagesStatus.second && !stagesStatus.third)
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.second, statusRow: 'filledDiv' } }/>
          <CellRow props={ { statusRow: 'input', stage: 3 } }/>
          {
            thirdStepArray.map( (step, index) => {
              return (
                <CellRow key={index} props={ { statusRow: 'emptyDiv' } }/>
              );
            })
          }
        </>
      }

      {
        (stagesStatus.third && !stagesStatus.fourth)
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.second, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.third, statusRow: 'filledDiv' } }/>

          <CellRow props={ { statusRow: 'input', stage: 4 } }/>
          {
            fourthStepArray.map( (step, index) => {
              return (
                <CellRow key={index} props={ { statusRow: 'emptyDiv' } }/>
              );
            })
          }
        </>
      }

      {
        (stagesStatus.fourth && !stagesStatus.fifth)
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.second, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.third, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.fourth, statusRow: 'filledDiv' } }/>

          <CellRow props={ { statusRow: 'input', stage: 5 } }/>
          {
            fifthStepArray.map( (step, index) => {
              return (
                <CellRow key={index} props={ { statusRow: 'emptyDiv' } }/>
              );
            })
          }
        </>
      }

      {
        (stagesStatus.fifth && !stagesStatus.sixth)
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.second, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.third, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.fourth, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.fifth, statusRow: 'filledDiv' } }/>

          <CellRow props={ { statusRow: 'input', stage: 6 } }/>
        </>
      }

      {
        stagesStatus.sixth
        &&
        <>
          <CellRow props={ { clientPreviousWord: previousClientsWord.first, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.second, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.third, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.fourth, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.fifth, statusRow: 'filledDiv' } }/>
          <CellRow props={ { clientPreviousWord: previousClientsWord.sixth, statusRow: 'filledDiv' } }/>
          {
            previousClientsWord.sixth !== correctWord.toUpperCase()
            ?
            <WinWindow win={false}/>
            :
            <WinWindow win={true}/>
          }
          
        </>
      }
    </StyledCellGrid>
  );
};
