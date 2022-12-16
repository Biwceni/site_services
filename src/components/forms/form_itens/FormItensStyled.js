import styled from "styled-components";

export const FormItensStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 40rem;
    height: 100%;

    div{
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
    }

    h1{
        align-self: center;
        font-size: 4rem;
   }

    label{
        font-size: 2rem;
        font-weight: bold;
        margin: 0.5rem 0;
    }

    input{
        font-size: 1.5rem;
        height: 3rem;
        padding: 0 1rem;
        border: none;
        border-radius: 10px;
    }

    button{
        align-self: center;
        font-size: 1.8rem;
        width: 11rem;
        height: 3.5rem;
        cursor: pointer;
        border: none;
        border-radius: 2rem;
        font-weight: bold;
        margin-top: 0.5rem;
        transition: 1s;

        &:hover{
            background-color: #ff0000;
            color: #fff;
        }
    }

    span{
        color: #ff0000;
        font-size: 1.5rem;
        margin: 1rem 0;
        font-weight: bold;
    }

    a{
        font-size: 1.7rem;
        margin-top: 1.2rem;
        align-self: center;
        color: #000;

        &:hover{
            color: #0000ff;
        }
    }
`;