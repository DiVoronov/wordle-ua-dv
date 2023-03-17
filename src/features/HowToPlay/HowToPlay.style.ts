import React from 'react';
import styled from 'styled-components';

export const StyledHowToPlay = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-wrap: wrap;
padding: 1rem;
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;

& .howToPlay-module-wrapper {
  width: 70%;
  background: #fff;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 5px gray;
  position: relative;

  & .howToPlay-module-close {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem;

    & > div {
      cursor: pointer;
      transition: background .4s, transform .4s;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        transform: scale(1.2);
      }

      &:active {
        background: #83deea;
        transform: scale(1.1);
      }
    }
  }

  & .howToPlay-module {
    
    & .howToPlay-module-info {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      gap: 10px;
      letter-spacing: .02rem;

      & .howToPlay-module-info-title {
        display: flex;
        font-size: 1.5rem;
        font-weight: 900;
        justify-content: center;
        margin-bottom: 1rem;
      }

      & .howToPlay-module-info-sub-title {
        display: flex;
      }

      & .howToPlay-module-info-description {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1rem;

        & > div {
          display: flex;
          align-items: center;
          gap: 10px;

          & > div {
            display: flex;
            text-align: justify;
          }
        }
      }

      & .howToPlay-module-info-examples {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & .howToPlay-module-info-examples-title {
          display: flex;
          font-size: 1.1rem;
          font-weight: 900;
          justify-content: center;

        }

        & .howToPlay-module-info-examples-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;

          & .howToPlay-module-info-example-holder {
            display: flex;
            justify-content: center;

            & > div {
              margin: .2rem;
              border: .9px solid grey;
              border-radius: 7px;
              width: 50px;
              height: 50px;
              font-size: 1.8rem;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 1px 2px;
              font-weight: 800;
              caret-color: transparent;
            }
            

          }
        }
      }
    }
  }
  
}


`;