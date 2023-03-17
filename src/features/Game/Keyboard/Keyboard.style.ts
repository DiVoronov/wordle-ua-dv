import React from 'react';
import styled from 'styled-components';

export const StyledKeyboard = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin: 3rem auto;
gap: .5rem;


& div {
    display: flex;
    justify-content: space-between;
    gap: .3rem;
    & div {
        border: .9px solid grey;
        border-radius: 7px;
        width: 76px;
        font-size: 1.7rem;
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 1px 2px;
        font-weight: 500;
        color: #454545;
        caret-color: transparent;
        padding: .6rem;
    }
}

@media screen and (max-width: 700px) {
    width: 90%;
    margin: 1rem auto;
    gap: .2rem;
    & div {
        gap: .2rem;
        & div {
            font-size: 1rem;
            width: 90%;
            padding: .3rem;
        }
    }
}
`;