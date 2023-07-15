import styled from "styled-components";
import seta from './../assets/seta_play.png';

export default function Perguntas(){

    return (
        <>
        <DivPerguntas>
            <p>Pergunta 1</p>
            <img data-test="play-btn" src={seta} alt="" />
        </DivPerguntas>
        <DivRepostas>
            <p>Uma extensão da linguagem JavaScript</p>
            <Div3bot>
                <div className="red">Não lembrei</div>
                <div className="yellow">Quase não lembrei</div>
                <div className="green">Zap</div>
            </Div3bot>
        </DivRepostas>
        </>
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

const DivRepostas = styled.div`
    width: 300px;
height: 131px;
background-color:#FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Div3bot = styled.div`
    display: flex;
    div{
        width: 85px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-left: 10px;
        margin-top: 20px;
    }
    .red{
        background-color:#FF3030;
    }
    .yellow{
        background-color: #FF922E;
    }
    .green{
        background-color: #2FBE34;
    }
`;