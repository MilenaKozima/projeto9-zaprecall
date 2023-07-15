import Concluido from "./Concluido";
import Perguntas from "./Perguntas";
import React from 'react';
import styled from 'styled-components';
import logo from './../assets/logo.png';

export default function Geral(props){
    return (
        <DivGeral> 
        <DivLogo>
            <img src={logo} alt="" />
            <p>ZapRecall</p>
        </DivLogo>
            {/* {props.cards.map(cartao =><Perguntas cards={cartao}></Perguntas>)} */}
            <Perguntas cards={props.cards} data-test ="flashcard" />
            {/* <Perguntas data-test ="flashcard" />
            <Perguntas data-test ="flashcard" />
            <Perguntas data-test ="flashcard" /> */}
            {/* <Perguntas data-test ="flashcard"/>
            <Perguntas data-test ="flashcard"/>
            <Perguntas data-test ="flashcard"/>
            <Perguntas data-test ="flashcard"/> 
            <Concluido data-test ="footer"/> */}
        </DivGeral>
    );
}

const DivGeral = styled.div`
width: 375px;
height: 667px;
background-color: #FB6B6B;
display: flex;
flex-direction: column;
align-items: center;
`;

const DivLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 26px;
margin-top: 42px;
height: 60px;

img{
    width: 52px;
    height: 60px;
}

p{
    width: 203px;
    font-size: 36px;
    color:#FFFFFF;
    font-family: 'Righteous', cursive;
    display: flex;
    justify-content: center;
}
`;