import styled from "styled-components";

export const HomeUserStyled = styled.div`
    height: 100%;
`;

export const HomeUserAlinhamentoStyled = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5rem;
`;

export const HomeUserEstruturaInternaStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
`;

export const HomeUserBaseItensStyled = styled.div`
    width: 98%;
`;

export const HomeUserCardItensStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(65rem, 1fr));
    grid-gap: 1rem;
`;

export const HomeUserAvisoItens = styled.p`
    font-size: 2rem;
    font-weight: bold;
    text-decoration: underline;
`;