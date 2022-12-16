import styled from "styled-components";

export const PopUpItensStyled = styled.div`
    position: fixed;
    display: ${({ ativarPopUpItens }) => ativarPopUpItens ? 'flex' : 'none'};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(177, 177, 177, 0.95);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const PopUpItensCaixaStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    max-height: 60rem;
    width: 95%;
    max-width: 130rem;
    background-color: #fff;
`;

export const PopUpItensEstruturaInternaStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 95%;
    max-height: 55rem;
    width: 95%;
    max-width: 125rem;
`;

export const PopUpItensButtonCloseStyled = styled.button`
    align-self: flex-end;
    font-weight: bolder;
    cursor: pointer;
    color: #a9a9a9;
    font-size: 1.6rem;
    border: none;
    background-color: #fff;
    transition: 0.8s;

    &:hover{
        color: #ff0000;
    }
`;

export const PopUpItensAlinhamentoStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 55rem;
    margin: auto;

    @media(max-width: 900px){
        grid-template-columns: 1fr;
    } 
`;

export const PopUpItensImgStyled = styled.div`
    display: flex;
    align-items: center;
    width: 50rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media(max-width: 900px){
        width: 100%;
        height: 20rem;
    }
`;

export const PopUpItensBaseDados = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    height: 100%;
    word-wrap: break-word;

    @media(max-width: 900px){
        max-width: 80rem;
    } 
    
`;

export const PopUpItensDadosCentraisStyled = styled.div`
    display: flex;
    flex-direction: column;

    p:nth-child(1){
        font-size: 1.7rem;
        font-weight: bold;
        text-align: center;
    }

    p:nth-child(2){
        font-size: 1.5rem;
        font-weight: lighter;
        color: #a9a9a9;
        margin: 2rem 0;
    }

    p:nth-child(3){
        font-size: 1.4rem;
        color: #008b8b;
        margin: 2rem 0;
    }
`;

export const PopUpItensBlocoValoresStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    div:nth-child(1){
        display: flex;
        align-items: center;
        border: 0.2rem solid #a9a9a9;
        height: 5rem;

        button{
            background-color: #fff;
            font-size: 3rem;
            padding: 0 1rem;
            color: #ff0000;
            border: none;
            cursor: pointer;
        }

        p{
            font-size: 2.2rem;
            text-align: center;
            font-weight: bold;
            margin: 0 1rem;
            width: 5rem;
        }
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        border: 2px solid #ff0000;
        height: 5rem;
        padding: 0 1rem;
        background-color: rgb(252, 47, 47);
        cursor: pointer;
        margin-left: 3rem;

        &:hover{
            background-color: #ff0000;
        }

        p:nth-child(1){
            font-size: 2rem;
            color: #fff;
            font-weight: bold;
            margin-right: 2rem;
        }

        p:nth-child(2){
            font-size: 1.8rem;
            color: #fff;
            font-weight: bolder;
            width: 10rem;
            text-align: end;
        }
    }

    @media(max-width: 900px){
        align-items: center;
        justify-content: center;
    }
`;  