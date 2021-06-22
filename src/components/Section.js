import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bg={backgroundImg}>
            <Fade left>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                    
                        <RightButton>
                            { rightBtnText }
                        </RightButton>
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>  
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('/images/model-s.jpg');
   dispaly: flex;
   flex-direction: column;
   justify-content: space-between; // vertical
   align-items: center; // horizontal
   background-image: ${props => `url('/images/${props.bg}')`}
`

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   margin-top: 420px;
   margin-left: 350px;
   justify-content: space-between;
   width: 600px;
   @media (max-width: 768px) {
       flex-direction: column;
   }

`

const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 250px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin-left: 35px

`

const RightButton = styled.div`
   background-color: white;
   color: black;
   height: 40px;
   width: 250px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.75;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin-right: 40px;
`

const DownArrow = styled.img`
   margin-top: -20px;
   height: 40px;
   overflow-x: hidden;
   animation: animationDown infinite 1.5s;

`

const Buttons = styled.div`

`