import React from 'react';
import styled from 'styled-components';

export const StyledWinWindow = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 100%;

& #box-for-card {
    width: 60%;
    height: 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 10px;
    background: #f5f5f5;
    border: 2px solid grey;
    padding: 2rem;
    margin: 20% auto;

    /* & #answer {
        color: #79b851;
    } */
}
`;