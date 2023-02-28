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

    & .class-name-for-animations {
        animation: shake .5s ease-in-out 0s;
    }

    @keyframes shake {
        0% {
            transform: translateX(0px);
        }
        10% {
            transform: translateX(20px);
        }
        20% {
            transform: translateX(-2px);
        }
        30% {
            transform: translateX(2px);
        }
        40% {
            transform: translateX(-2px);
        }
        50% {
            transform: translateX(2px);
        }
        60% {
            transform: translateX(-2px);
        }
        70% {
            transform: translateX(2px);
        }
        80% {
            transform: translateX(-2px);
        }
        90% {
            transform: translateX(2px);
        }100% {
            transform: translateX(0px);
        }
    }
}

`;