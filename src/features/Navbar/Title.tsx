import React from 'react';
import { Box } from '@mui/material';

export const Title = () => {
  return (
    <Box 
        sx={{
          display: 'flex', 
          alignItems: 'center', 
          color: '#000', 
          fontSize: '2rem', 
          fontWeight: '800',
          letterSpacing: '.2rem'
        }}>
          WORDLE Українською
      </Box>
  );
};