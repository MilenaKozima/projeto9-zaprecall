import styled from "styled-components";
import seta from './../assets/seta_play.png';
import setaVirar from './../assets/seta_virar.png';
import correto from './../assets/icone_certo.png';
import erro from './../assets/icone_erro.png';
import qua from './../assets/icone_quase.png';
import { useState } from "react";

export default function Perguntas({ cards, index, contador, setContador}) {

    const { question, answer } = cards;
    const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false);
    const [status, setStatus] = useState('não respondeu')

    function aparecerPergunta() {
        setPergunta(true);
    }

    function aparecerResposta() {
        setResposta(true);
    }

    function respondido(resp) {
        setStatus(resp)
        setPergunta(false)
        setContador(contador+1);
        console.log(contador);
    }

    return (
        <>
            {!pergunta ? (
                <DivPerguntas Perguntas data-test="flashcard" status={status}>
                    <p data-test="flashcard-text">Pergunta {index}</p>
                    {status === 'errado' && <img data-test="no-icon" src={erro} alt="" />}
                    {status === 'quase' && <img data-test="partial-icon" src={qua} alt="" />}
                    {status === 'certo' && <img data-test="zap-icon" src={correto} alt="" />}
                    {status !== 'errado' && status !== 'quase' && status !== 'certo' && (
                        <img data-test="play-btn" onClick={aparecerPergunta} src={seta} alt="" />
                    )}
                </DivPerguntas>
            )
                : (
                    <DivRepostas Perguntas data-test="flashcard">
                        {!resposta ? (
                            <>
                                <p data-test="flashcard-text">{question}</p>
                                <img data-test="turn-btn" onClick={aparecerResposta} src={setaVirar} alt="" />
                            </>
                        ) : (
                            <>
                                <p data-test="flashcard-text">{answer}</p>
                                <Div3bot>
                                    <button data-test="no-btn" onClick={() => respondido('errado')} className="red">Não lembrei</button>
                                    <button data-test="partial-btn" onClick={() => respondido('quase')} className="yellow">Quase não lembrei</button>
                                    <button data-test="zap-btn" onClick={() => respondido('certo')} className="green">Zap</button>
                                </Div3bot>
                            </>

                        )}
                    </DivRepostas>
                )}
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
justify-content: space-between;

img{
    width: 20px;
    height: 23px;
    margin-right: 15px;
}

p{
    width: 87px;
    margin-left: 15px;
    font-family: 'Recursive', sans-serif;
    text-decoration: ${props => {
        if (props.status === 'errado' || props.status === 'quase' || props.status === 'certo') {
            return "line-through"
        } else {
            return "none"
        }
    }};
    color: ${props => {
        if (props.status === 'errado') {
            return "#FF3030"
        } else if (props.status === 'quase') {
            return "#FF922E"
        } else if (props.status === 'certo') {
            return "#2FBE34"
        }
    }};
}
`;

const DivRepostas = styled.div`
    width: 300px;
    height: 131px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background-color: #FFFFD4;
p{
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}

img{
    width: 20px;
    height: 23px;
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`;

const Div3bot = styled.div`
    display: flex;
    button{
        width: 85px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-left: 10px;
        margin-bottom: 15px;
        font-family: 'Recursive', sans-serif;
        font-size: 14px;
        border: none;
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