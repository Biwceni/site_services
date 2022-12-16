import styled from "styled-components";

export const CardItensPedidoEstruturaStyled = styled.div`
    background-color: #ff0000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25rem;

    table{
        padding: 1rem;
        table-layout: fixed;
        min-width: 45rem; 
        max-width: 100%;

        th{
            text-align: left;
            
        }

        td{
            word-wrap: break-word;
            text-align: right;
        }

        th, td{
            color: #fff;
            font-size: 1.5rem;
        }
    }

    div{
        display: flex;
        align-items: center;
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