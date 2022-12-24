import styled from "styled-components";

export const CardUserStyled = styled.div`
    border: 2px solid #fff;
    border-radius: 2rem;
    background-color: #ff0000;
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 100%;
    min-width: 25rem;

    p{
        font-size: 2rem;
        color: #fff;
        font-weight: bold;
        width: 100%;
        border: 2px solid black;
    }

    div{
        padding: 1.5rem;
    }

    button{
        font-size: 1.5rem;
        width: 10rem;
        height: 3rem;
        cursor: pointer;
        border: none;
        border-radius: 1rem;
        font-weight: bold;
        transition: 1s;

        &:hover{
            background-color: #ff0000;
            color: #fff;
        }
    }
`;