import { useContext, useEffect } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import { CardItensPedidoEstruturaStyled } from "./CardItensPedidoStyled";

function CardItensPedido({ idpedidos, nomepedido, qtdpedido, valorfinal, userpedido }) {

    // Utilizando funções específicas do Context criado
    const { deletarPedido, setUserPedidoBD } = useContext(ContextValues)

    // Carregar o State do pedido em específico, vai servir como um auxiliar para uma operação futura
    useEffect(() => {
        setUserPedidoBD(userpedido)
    // Só haverá um novo carregamento caso o setUserPedidoBD ou o userpedido sofrer alguma alteração
    }, [setUserPedidoBD, userpedido])

    // Acionando a função excluir pedido base, mandando o idpedidos para a função principal, assim excluindo um pedido em específico
    const excluirPedidoBase = () => {
        deletarPedido(idpedidos)
    }

    return (
        <div>
            <CardItensPedidoEstruturaStyled>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Pedidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Nome do Pedido:</th>
                            <td>{nomepedido}</td>
                        </tr>
                        <tr>
                            <th>Qtd do Pedido:</th>
                            <td>{qtdpedido}</td>
                        </tr>
                        <tr>
                            <th>Valor do Pedido:</th>
                            <td>{valorfinal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || ''}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={excluirPedidoBase}>Excluir Pedido</button>
                </div>
            </CardItensPedidoEstruturaStyled>
        </div>
    )
}

export default CardItensPedido;