import { useEffect, useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import api from "../../api_config/ApiConfig";
import { CardUserConfirmarPedidoStyled } from "./CardUserConfirmarPedidoStyled";

function CardUserConfirmarPedido({ userpedido, nome }){

    // Utilizando funções específicas do Context criado
    const { setListaPedidosBD } = useContext(ContextValues)

    // Carregar os pedidos de um usuário em específico
    useEffect(() => {
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        // Com base no id do usuário logado os pedidos vão ser pesquisados no Banco de Dados para carregar o State listaPedidosBD
        api.get(`/listaPedidos/${userpedido}`, headers)
        .then((response) => {
            setListaPedidosBD(response.data.pedido)
        })
        .catch((error) => console.log(error))
    // O carregamento só vai ser refeito quando userpedido ou setListaPedidosBD sofrerem alguma alteração
    }, [userpedido, setListaPedidosBD])
    
    return(
        <CardUserConfirmarPedidoStyled>
            <table>
                <tbody>
                    <tr>
                        <td>Nome do Usuário a Fazer o Pedido:</td>
                        <th>{nome}</th>
                    </tr>
                </tbody>
            </table>
        </CardUserConfirmarPedidoStyled>
    )
}

export default CardUserConfirmarPedido;