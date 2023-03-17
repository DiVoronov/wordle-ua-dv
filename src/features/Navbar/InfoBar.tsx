import React from 'react';
import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useAppDispatch } from '../../app/hooks';
import { setInfoModuleAppear } from '../../app/slices/infoAppearSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const InfoBar = () => {

  const statusInfoModule = useSelector((state: RootState) => state.infoAppear);

  const dispatch = useAppDispatch();
  const handleInfoModuleAppear = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(setInfoModuleAppear(!statusInfoModule));
  };

  return (
    <Box component='div' className='infoBar-wrapper'>
      <Box component='div' className='infoBar-info' onClick={handleInfoModuleAppear}>
        <InfoIcon fontSize='large'/>
      </Box>
    </Box>
  );
};