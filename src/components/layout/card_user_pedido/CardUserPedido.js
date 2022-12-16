import { CardUserPedidoStyled } from "./CardUserPedidoStyled"

function CardUserPedido({ usernome, userpedido, confirmarCompra, cancelarPedido }) {

    // Acionando a função confirmar e enviar o userpedido junto a ativação da função principal
    const confirmarCompraBase = () => {
        confirmarCompra(userpedido)
    }

    // Acionando a função cancelar pedido, servindo como base para a chamada da função principal
    const cancelarPedidoBase = () => {
        cancelarPedido()
    }

    return (
        <CardUserPedidoStyled>
            <table>
                <tbody>
                    <tr>
                        <td>Pedido do Usuário:</td>
                        <th>{usernome}</th>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={confirmarCompraBase}>Confirmar Pedido</button>
                <button onClick={cancelarPedidoBase}>Voltar</button>
            </div>
        </CardUserPedidoStyled>
    )
}

export default CardUserPedido;