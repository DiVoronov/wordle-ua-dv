import React from 'react';
import { Box } from '@mui/material';
import { StyledHowToPlay } from './HowToPlay.style';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from '../../app/hooks';
import { setInfoModuleAppear } from '../../app/slices/infoAppearSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import { Cell } from '../shared/Cell/Cell';
import { CheckWordExample } from './CheckWordExample';

export const HowToPlay = () => {

  const dispatch = useAppDispatch();
  const handleInfoModuleAppearClose = () => {
    dispatch(setInfoModuleAppear(false));
  };

  const wordLetterCorrect = [{letter: 'р', role: 'incorrect'}, {letter: 'і', role: 'correct'}, {letter: 'ч', role: 'incorrect'}, {letter: 'к', role: 'incorrect'}, {letter: 'а', role: 'incorrect'}];
  const wordLetterPresent = [{letter: 'в', role: 'near'}, {letter: 'і', role: 'incorrect'}, {letter: 'т', role: 'incorrect'}, {letter: 'е', role: 'incorrect'}, {letter: 'р', role: 'incorrect'}];
  const wordNoMatches = [{letter: 'с', role: 'incorrect'}, {letter: 'л', role: 'incorrect'}, {letter: 'о', role: 'incorrect'}, {letter: 'в', role: ''}, {letter: 'о', role: 'incorrect'}];
  
  return (
    <StyledHowToPlay>
      <Box component='div' className='howToPlay-module-wrapper' onClick={(e) => e.stopPropagation()}>
        <Box component='div' className='howToPlay-module'>
          <Box component='div' className='howToPlay-module-close'>
            <Box component='div' onClick={handleInfoModuleAppearClose}>
              <HighlightOffIcon fontSize='medium'/>
            </Box>
          </Box>
          <Box component='div' className='howToPlay-module-info'>
            <Box component='div' className='howToPlay-module-info-title'>Як грати</Box>
            <Box component='div' className='howToPlay-module-info-sub-title'>Вгадай слово з шести спроб</Box>
            <Box component='div' className='howToPlay-module-info-description'>
                <Box><RemoveIcon/><Box>Кожне слово складається з пʼяти літер</Box></Box>
                <Box><RemoveIcon/><Box>Колір навколо літери змінюється у залежності від того, як близкьо ваш варіант до загадного слова</Box></Box>
            </Box>
            <Box component='div' className='howToPlay-module-info-examples'>
              <Box component='div' className='howToPlay-module-info-examples-title'>Приклади</Box>
              <Box component='div' className='howToPlay-module-info-examples-wrapper'>
                <Box component='div' className='howToPlay-module-info-example-holder'>
                  <CheckWordExample word={wordLetterCorrect}/>
                </Box>
                <Box component='div' className='howToPlay-module-info-example-description'>
                  Буква <strong>"і"</strong> наявна у загаданому слові, та стоїть на цьому місці.
                </Box>

                <Box component='div' className='howToPlay-module-info-example-holder'>
                  <CheckWordExample word={wordLetterPresent}/>
                </Box>
                <Box component='div' className='howToPlay-module-info-example-description'>
                  Буква <strong>"в"</strong> наявна у загаданому слові, проте стоїть в іншому місці.
                </Box>

                <Box component='div' className='howToPlay-module-info-example-holder'>
                  <CheckWordExample word={wordNoMatches}/>
                </Box>
                <Box component='div' className='howToPlay-module-info-example-description'>
                  Букви <strong>"в"</strong> немає у загаданому слові.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledHowToPlay>
  );
};