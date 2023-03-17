import React from 'react';
import { Box } from '@mui/material';
import { Title } from './Title';
import { StyledNavbar } from './Navbar.style';
import { InfoBar } from './InfoBar';

export const Navbar = () => {

  return (
    <StyledNavbar>
      <Title/>
      <InfoBar/>
    </StyledNavbar>
  );
};