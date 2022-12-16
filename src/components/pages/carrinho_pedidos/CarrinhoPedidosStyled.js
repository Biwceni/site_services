import styled from "styled-components";

export const CarrinhoPedidosStyled = styled.div`
    height: 100%;
`;

export const CardItensPedidoAlinhamentoStyled = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5rem;
`;

export const CarrinhoPedidosEstruturaInternaStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CarrinhoPedidosBaseStyled = styled.div`
    width: 98%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        a{
            font-size: 1.7rem;
            color: #000;

            &:hover{
                color: #0000ff;
            }
        }
`;

export const CarrinhoPedidosCardItensPedidoStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(65rem, 1fr));
    grid-gap: 1rem;

    p{
        font-size: 2rem;
        font-weight: bold;
        text-decoration: underline;
    }
`;

export const CardItensPedidosFinalDadosStyled = styled.div`
    margin-top: 5rem;

    div:nth-child(1){
        p{
            font-size: 1.8rem;
            font-weight: bold;
            text-decoration: underline;
            padding: 3rem 0;
        }
    }

    div:nth-child(2){
        button{
        font-size: 1.5rem;
        margin: 1rem;
        width: 25rem;
        height: 3rem;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        transition: 1s;

        &:hover{
            background-color: #ff0000;
            color: #fff;
        }
    }
    }
`;