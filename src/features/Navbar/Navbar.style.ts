import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
display: flex;
justify-content: center;
background: #fff;
padding: 1rem;
position: relative;
border-bottom: 1px solid black;

& .infoBar-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;

  & .infoBar-info {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
    transition: background .4s, transform .4s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      background: #83deea;
      transform: scale(1.1);
    }
  }
}
`;