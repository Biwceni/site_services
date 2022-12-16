import styled from "styled-components";

export const FormLoginStyled = styled.div`
    width: 100%;
    max-width: 30rem;

    div{
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
    }

    h1{
      align-self: center;
      font-size: 5rem;
      margin-bottom: 1.2rem;
   }

    label{
        font-size: 2.2rem;
        font-weight: bold;
        margin: 1.2rem 0;
    }

    input{
        font-size: 1.5rem;
        height: 3rem;
        padding: 0 1rem;
        border: none;
        border-radius: 1rem;
    }

    button{
        align-self: center;
        font-size: 1.8rem;
        width: 8rem;
        height: 3.5rem;
        cursor: pointer;
        border: none;
        border-radius: 2rem;
        font-weight: bold;
        margin-top: 1rem;
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