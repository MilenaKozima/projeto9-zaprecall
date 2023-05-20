import styled from "styled-components";
import seta from './../assets/seta_play.png';

export default function Perguntas(){
    return (
        <DivPerguntas>
            <p>Perguntas</p>
            <img src={seta} alt="" />
        </DivPerguntas>
    );
}

const DivPerguntas = styled.div`
width: 300px;
height: 65px;
background-color:#FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top: 25px;
display: flex;
align-items: center;

img{
    width: 20px;
    height: 23px;
    margin-left: 163px;
}

p{
    width: 87px;
    margin-left: 15px;
}
`;