import styled from "styled-components";

export const CardUserPedidoStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    table{
        margin: 1rem 0;

        td{
            padding-right: 1rem;
        }
        
        td, th{
            font-size: 1.4rem;
        }
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button{
        font-size: 1.3rem;
        border: none;
        width: 15rem;
        height: 3rem;
        border-radius: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: 1s;
        margin: 0 1rem;

        &:hover{
            background-color: #ff0000;
            color: #fff;
        }
    }
`;