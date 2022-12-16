import styled from "styled-components";

export const HomeAdminStyled = styled.div`
    height: 100%;
`;

export const HomeAdminEstruturaInternaStyled = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5rem;
`;

export const HomeAdminItensStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
`;

export const HomeAdminAdicionarItensStyled = styled.div`
    a{
        text-decoration: none;
        font-size: 2rem;
        padding: 1rem;
        border-radius: 2rem;
        color: #000;
        font-weight: bold;
        transition: 1s;

        &:hover{
            background-color: #ff0000;
            color: #fff;
        }
    }
`;

export const HomeAdminBaseItensStyled = styled.div`
    width: 98%;

    h1{
        font-size: 2rem;
    }
`;

export const HomeAdminCardItensEstruturaStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(65rem, 1fr));
    grid-gap: 1rem;

    h1{
        text-decoration: underline;
        margin: 20px 0;
    }
`;