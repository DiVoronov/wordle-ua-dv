import React from 'react';
import styled from 'styled-components';

export const StyledCellGrid = styled.div`
margin: 2rem auto;
padding: 10px;
max-width: max-content;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid grey;
gap: 5px;

/* & form {
    display: flex;
    justify-content: center;
    gap: 5px;
} */

& .cellRow {
    width: 100%;
    display: flex;
    gap: 5px;

    & > .cell, .cellInput {
        border: .9px solid grey;
        border-radius: 7px;
        width: 76px;
        height: 76px;
        font-size: 3.7rem;
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 1px 2px;
        font-weight: 800;
        color: #454545;
        caret-color: transparent;
    }
}

`;