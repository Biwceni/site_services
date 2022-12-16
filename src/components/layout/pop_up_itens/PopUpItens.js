import { useState, useEffect } from "react";
import PopUpConfirmarPedido from "../pop_up_confirmar_pedido/PopUpConfirmarPedido";
import {
            PopUpItensStyled,
            PopUpItensCaixaStyled,
            PopUpItensEstruturaInternaStyled,
            PopUpItensButtonCloseStyled,
            PopUpItensAlinhamentoStyled,
            PopUpItensImgStyled,
            PopUpItensBaseDados,
            PopUpItensDadosCentraisStyled,
            PopUpItensBlocoValoresStyled } from "./PopUpItensStyled";

function PopUpItens({ ativarPopUpItens, desativarPopUpItens, url, image, nomeitem, descricao, valor }) {

    // State para realizar o controle da quantidade de um determinado pedido
    const [qtdAtual, setQtdAtual] = useState(1)
    // State para realizar de forma dinâmica o cálculo do valor final, com base na quatidade selecionada
    const [valorAtual, setValorAtual] = useState()
    // State que vai servir de base para a ativação do PopUp
    const [popUpConfirmarPedido, setPopUpConfirmarPedido] = useState(false)

    // Carregar o valor vindo daquele item específico dentro do State valorAtual, servindo esse de referência para o cálculo do valor final
    useEffect(() => {
        setValorAtual(valor)
    }, [valor])

    // Função que vai movimentar o State qtdAtual, retirando sua quantidade e também realizando a dinâmica de cálculo do State valorAtual, para que se mantenha uma consistência de valores entre eles
    const retirarQtd = () => {
        // Condicional que vai impossibilitar que a quantidade de um determinado item seja menor do que 1
        if (qtdAtual <= 1) {
            return false
        }
        // Realizar a dimunuição da quantidade selecionada daquele item em específico
        setQtdAtual(qtdAtual - 1)
        // Realizar a diminuição do valor daquele item em específico, tendo como base para o cálculo um valor dinâmico(valorAtual) e um valor fixo(valor)
        setValorAtual(valorAtual - valor)
    }

    // Função que vai movimentar o State qtdAtual, adicionando sua quantidade e também realizando a dinâmica de cálculo do State valorAtual, para que se mantenha uma consistência de valores entre eles
    const adicionarQtd = () => {
        // Realizar a adição da quantidade selecionada daquele item em específico
        setQtdAtual(qtdAtual + 1)
        // Realizar a adição do valor daquele item em específico, tendo como base para o cálculo um valor dinâmico(valorAtual) e um valor fixo(valor)
        setValorAtual(valorAtual + valor)
    }

    // Função que vai servir para acionar a mudança do State que controla a ativação e desativação do PopUp, além de que após ser fechado, seus States terão que ser restaurados manualmente, tanto o qtdAtual como o valorAtual, para que quando o PopUp seja aberto novamente, os valores se mantenham como padrões em relação ao que foi selecionado do item
    const fecharPopUp = () => {
        setQtdAtual(1)
        setValorAtual(valor)
        desativarPopUpItens()
    }

    // Função que vai servir para ativar o PopUp, com base no controle do State
    const ativarPopUpConfirmarPedidoBase = () => {
        setPopUpConfirmarPedido(!popUpConfirmarPedido)
    }

    return (
        <PopUpItensStyled ativarPopUpItens={ativarPopUpItens}>
            <PopUpItensCaixaStyled>
                <PopUpItensEstruturaInternaStyled>
                    <PopUpItensButtonCloseStyled onClick={fecharPopUp}>X</PopUpItensButtonCloseStyled>
                    <PopUpItensAlinhamentoStyled>
                        <PopUpItensImgStyled>
                            <img src={url + image} alt={nomeitem} />
                        </PopUpItensImgStyled>
                        <PopUpItensBaseDados>
                            <PopUpItensDadosCentraisStyled>
                                <p>{nomeitem}</p>
                                <p>{descricao}</p>
                                <p><span>{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></p>
                            </PopUpItensDadosCentraisStyled>
                            <PopUpItensBlocoValoresStyled>
                                <div>
                                    <button onClick={retirarQtd}>-</button>
                                    <p>{qtdAtual}</p>
                                    <button onClick={adicionarQtd}>+</button>
                                </div>
                                <div onClick={ativarPopUpConfirmarPedidoBase}>
                                    <p>Adicionar</p>
                                    <p><span>{valorAtual?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || ''}</span></p>
                                </div>
                            </PopUpItensBlocoValoresStyled>
                        </PopUpItensBaseDados>
                    </PopUpItensAlinhamentoStyled>
                </PopUpItensEstruturaInternaStyled>
            </PopUpItensCaixaStyled>
            <PopUpConfirmarPedido
                ativarPopUpConfirmarPedido={popUpConfirmarPedido}
                fecharPopUpConfirmarPedido={ativarPopUpConfirmarPedidoBase}
                nomepedido={nomeitem}
                qtdpedido={qtdAtual}
                valorfinal={valorAtual}
            />
        </PopUpItensStyled>
    )
}

export default PopUpItens;