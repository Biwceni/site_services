import { useContext, useEffect, useState } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";
import CardUserConfirmarPedido from "../../layout/card_user_confirmar_pedido/CardUserConfirmarPedido";
import CardItensPedido from "../../layout/card_itens_pedido/CardItensPedido";
import Footer from "../../layout/footer/Footer";
import {
    CarrinhoPedidosStyled,
    CardItensPedidoAlinhamentoStyled,
    CarrinhoPedidosEstruturaInternaStyled,
    CarrinhoPedidosBaseStyled,
    CarrinhoPedidosCardItensPedidoStyled,
    CardItensPedidosFinalDadosStyled
} from "./CarrinhoPedidosStyled";

function CarrinhoPedidos() {

    // Utilizando funções específicas do Context criado
    const { authUser, userDadosBD, listaPedidosBD, finalizarPedidos } = useContext(ContextValues)

    // State para o controle do valor final dos Pedidos
    const [valorTotalFinal, setValorTotalFinal] = useState()

    // Vai servir para o carregamento do valor final
    useEffect(() => {
        // Utilizando o método reduce, com base no tipo de dado numérico, o valor final específico de cada pedido vai ser somado e se tornando um novo valor único
        const valorTotalBase = listaPedidosBD.reduce((valorTotal, pedidos) => {
            valorTotal += pedidos.valorfinal
            return valorTotal
        }, 0)

        // Salvar o novo valor único no State
        setValorTotalFinal(valorTotalBase)

    // O carregamento só vai ser realizado novamente quando listaPedidosBD sofrer alguma alteração
    }, [listaPedidosBD])

    // Acionando a função finalizar compra base, vai servir para ativar a função principal que vai encerrar o carrinho de pedidos
    const finalizarCompraBase = () => {
        finalizarPedidos()
    }

    return (
        <CarrinhoPedidosStyled>
            <Navbar to='/home_user' />
            <CardItensPedidoAlinhamentoStyled>
                <CarrinhoPedidosEstruturaInternaStyled>
                    <CarrinhoPedidosBaseStyled>
                        {
                            authUser &&
                            userDadosBD.map((dados) => (
                                <CardUserConfirmarPedido
                                    userpedido={dados.idusuarios}
                                    nome={dados.nome}
                                    key={dados.idusuarios}
                                />
                            ))
                        }
                        <CarrinhoPedidosCardItensPedidoStyled>
                            {
                                authUser &&
                                listaPedidosBD.map((pedidos) => (
                                    <CardItensPedido
                                        idpedidos={pedidos.idpedidos}
                                        nomepedido={pedidos.nomepedido}
                                        qtdpedido={pedidos.qtdpedido}
                                        valorfinal={pedidos.valorfinal}
                                        userpedido={pedidos.userpedido}
                                        key={pedidos.idpedidos}
                                    />
                                ))
                            }
                            {
                                listaPedidosBD.length === 0 &&
                                <p>Não há Pedidos</p>
                            }
                        </CarrinhoPedidosCardItensPedidoStyled>
                        <CardItensPedidosFinalDadosStyled>
                            <div>
                                <h1>Total Pedidos: </h1>
                                <p>{valorTotalFinal?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || ''}</p>
                            </div>
                            {
                                listaPedidosBD.length > 0 &&
                                <div>
                                    <button onClick={finalizarCompraBase}>Confirmar Compra Pedidos</button>
                                    <button onClick={finalizarCompraBase}>Excluir Compra Pedidos</button>
                                </div>
                            }
                        </CardItensPedidosFinalDadosStyled>
                        <div>
                            <Link to='/home_user'>Voltar</Link>
                        </div>
                    </CarrinhoPedidosBaseStyled>
                </CarrinhoPedidosEstruturaInternaStyled>
                <Footer />
            </CardItensPedidoAlinhamentoStyled>
        </CarrinhoPedidosStyled>
    )
}

export default CarrinhoPedidos;