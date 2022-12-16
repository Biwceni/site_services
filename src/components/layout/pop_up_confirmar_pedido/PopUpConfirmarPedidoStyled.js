import styled from "styled-components";

export const PopUpConfirmarPedidoStyled = styled.div`
    position: fixed;
    display: ${({ ativarPopUpConfirmarPedido }) => ativarPopUpConfirmarPedido ? 'flex' : 'none'};
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

export const PopUpConfirmarPedidoCaixaStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95%;
    max-height: 40rem;
    width: 95%;
    max-width: 60rem;
    background-color: #fff;
`;

export const PopUpConfirmarPedidoEstruturaInterna = styled.div`
    display: flex;
    flex-direction: column;
    height: 95%;
    max-height: 35rem;
    width: 95%;
    max-width: 55rem;
`;

export const PopUpConfirmarPedidoButtonCloseStyled = styled.button`
    align-self: flex-end;
    font-weight: bolder;
    cursor: pointer;
    color: #a9a9a9;
    font-size: 1.6rem;
    border: none;
    background-color: #fff;
    transition: 0.8s;

    &:hover{
        color: red;
    }
`;

export const PopUpConfirmarPedidoDadosAlinhamentoStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    & > table{
        margin: 2rem 0;
        table-layout: fixed;
        max-width: 50rem; 
        width: 100%;

        th{
            text-align: left;
        }

        td{
            word-wrap: break-word;
            text-align: right;
        }
        
        th, td{
            font-size: 1.4rem;
            padding: 1rem 0;
        }
    } 
`;