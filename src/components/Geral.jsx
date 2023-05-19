import Concluido from "./Concluido";
import Perguntas from "./Perguntas";
import React from 'react';
import styled from 'styled-components';

export default function Geral(){
    return (
        <DivGeral> 
            <Perguntas />
            <Perguntas />
            <Perguntas />
            <Perguntas />
            <Perguntas />
            <Perguntas />
            <Perguntas />
            <Concluido />
        </DivGeral>
    );
}

const DivGeral = styled.div`
width: 375px;
height: 667px;
background-color: #FB6B6B;
`;