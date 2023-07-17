import styled from "styled-components";

export default function Concluido({cards, contador, setContador}) {
    return (
        <DivConcluido>
            <p data-test="footer">{contador}/{cards.length} CONCLUÍDOS</p>
        </DivConcluido>
    );
}

const DivConcluido = styled.div`
width: 375px;
height: 70px;
background-color: red;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
display: flex;
justify-content: center;
align-items: center;
margin-top: 46px;
position: absolute;
bottom: 0;
`;