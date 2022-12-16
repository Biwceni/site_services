import styled from 'styled-components';

export const CardItensEstruturaStyled = styled.div`
    background-color: #ff0000;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 25rem; 
    grid-template-areas: "i d o";

    ${({ clickPopUp }) => clickPopUp && {
        gridTemplateColumns: '1fr 4fr',
    }}
    
    &:hover{
        ${({ clickPopUp }) => clickPopUp && {
        cursor: 'pointer',
        border: '0.2rem solid black'
    }}
    }
`;

export const CardItensImgStyled = styled.div`
    grid-area: i;
    width: 25rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 0 2rem;
    } 
`;

export const CardItensInfoStyled = styled.div`
    grid-area: d;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    word-wrap: break-word;
    max-width: 100%;
    min-width: 30rem;

    p:nth-child(1){
        color: #fff;
        font-weight: bold;
        font-size: 1.7rem;
    }

    p:nth-child(2){
        height: 100%;
        color: #fff;
        font-size: 1.5rem;
        font-weight: lighter;
        padding: 1rem 0;
        text-align: justify;
    }
    
    p:nth-child(3){
        color: white;
        font-weight: bolder;
        font-size: 1.4rem;
    } 
`;

export const CardItensOpcoesStyled = styled.div`
    grid-area: o;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: #fff;
        width: 6rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin: 2rem 0;
        transition: 1s;

        &:hover{
            background-color: #ff0000;

            button{
                background-color: #ff0000;
            }

            a, button{
                color: #fff;
            }
        }
    }

    a, button{
        font-size: 1.5rem;
        text-decoration: none;
        border: none;
        font-weight: bold;
        color: #000;
        cursor: pointer;
        transition: 1s;
    }
`;