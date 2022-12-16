import styled from 'styled-components';

export const MensagemInfoStyled = styled.p`
    font-size: 1.8rem;
    align-self: center;

    ${({ tipoMensagem }) => tipoMensagem === "erro" && {
        color: "#ff0000"
    }}

    ${({ tipoMensagem }) => tipoMensagem === "correto" && {
        color: "#00ff00"
    }}
`;