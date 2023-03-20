import React from 'react';
import styled from 'styled-components';

export const StyledWinWindow = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 100%;

& #box-for-card {
    width: 70%;
    background: #fff;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 0px 5px gray;
    position: relative;

    height: 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 2rem;
    margin: 20% auto;

    /* & #answer {
        color: #79b851;
    } */
}
`;