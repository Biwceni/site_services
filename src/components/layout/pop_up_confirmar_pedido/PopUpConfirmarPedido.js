import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import CardUserPedido from "../card_user_pedido/CardUserPedido";
import {
            PopUpConfirmarPedidoStyled,
            PopUpConfirmarPedidoCaixaStyled,
            PopUpConfirmarPedidoEstruturaInterna,
            PopUpConfirmarPedidoButtonCloseStyled,
            PopUpConfirmarPedidoDadosAlinhamentoStyled } from "./PopUpConfirmarPedidoStyled";

function PopUpConfirmarPedido({ ativarPopUpConfirmarPedido, fecharPopUpConfirmarPedido, nomepedido, qtdpedido, valorfinal }) {

    // Utilizando funções específicas do Context criado
    const { userDadosBD, adicionarPedido, authUser } = useContext(ContextValues)

    // Função que vai servir para acionar a mudança do State que controla a ativação e desativação do PopUp
    const fecharPopUpBase = () => {
        fecharPopUpConfirmarPedido()
    }

    // Acionando a função confirmar, para analisar e gravar os dados no Banco de Dados
    const confirmar = (userpedido) => [
        adicionarPedido(nomepedido, qtdpedido, valorfinal, userpedido)
    ]

    return (
        <PopUpConfirmarPedidoStyled ativarPopUpConfirmarPedido={ativarPopUpConfirmarPedido}>
            <PopUpConfirmarPedidoCaixaStyled>
                <PopUpConfirmarPedidoEstruturaInterna>
                    <PopUpConfirmarPedidoButtonCloseStyled onClick={fecharPopUpBase}>X</PopUpConfirmarPedidoButtonCloseStyled>
                    <PopUpConfirmarPedidoDadosAlinhamentoStyled>
                        <h1>Dados do Pedido</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Nome Pedido:</th>
                                    <td>{nomepedido}</td>
                                </tr>
                                <tr>
                                    <th>Qtd Pedido:</th>
                                    <td>{qtdpedido}</td>
                                </tr>
                                <tr>
                                    <th>Valor Pedido:</th>
                                    <td>{valorfinal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || ''}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            authUser &&
                            userDadosBD.map((dados) => (
                                <CardUserPedido
                                    usernome={dados.nome}
                                    userpedido={dados.idusuarios}
                                    key={dados.idusuarios}
                                    confirmarCompra={confirmar}
                                    cancelarPedido={fecharPopUpBase}
                                />
                            ))
                        }
                    </PopUpConfirmarPedidoDadosAlinhamentoStyled>
                </PopUpConfirmarPedidoEstruturaInterna>
            </PopUpConfirmarPedidoCaixaStyled>
        </PopUpConfirmarPedidoStyled>
    )
}

export default PopUpConfirmarPedido;