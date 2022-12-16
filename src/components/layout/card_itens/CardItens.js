import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import PopUpItens from "../pop_up_itens/PopUpItens";
import { 
            CardItensEstruturaStyled, 
            CardItensImgStyled, 
            CardItensInfoStyled, 
            CardItensOpcoesStyled } from "./CardItensStyled";

function CardItens({ iditens, url, image, nomeitem, descricao, valor }) {

    // Utilizando funções específicas do Context criado
    const { authAdmin, authUser, excluirItens } = useContext(ContextValues)

    // State que vai servir de base para a ativação do PopUp
    const [ativarPopUp, setAtivarPopUp] = useState(false)

    // Função para ativar e desativar o PopUp, mas que só vai ser ativada se o User estiver logado
    const ativarPopUpItensEstrutura = () => {
        if (authUser) {
            setAtivarPopUp(!ativarPopUp)
        }
        // Caso o User não estiver logado o State não mudará e o PopUp não será ativo
        return false
    }

    // Acionando a função excluir item, passando um id específico para poder servir de referência para excluir determinado item
    const excluirItem = () => {
        excluirItens(iditens)
    }

    return (
        <div>
            <CardItensEstruturaStyled clickPopUp={authUser} onClick={ativarPopUpItensEstrutura}>
                <CardItensImgStyled>
                    <img src={url + image} alt={nomeitem} />
                </CardItensImgStyled>
                <CardItensInfoStyled>
                    <p>{nomeitem}</p>
                    <p>{descricao}</p>
                    <p><span>{valor?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || ''}</span></p>
                </CardItensInfoStyled>
                {
                    authAdmin && (
                        <CardItensOpcoesStyled>
                            <div>
                                <Link to={`/editar_itens/${iditens}`}>Editar</Link>
                            </div>
                            <div>
                                <button onClick={excluirItem}>Excluir</button>
                            </div>
                        </CardItensOpcoesStyled>
                    )
                }
            </CardItensEstruturaStyled>
            <PopUpItens
                ativarPopUpItens={ativarPopUp}
                desativarPopUpItens={ativarPopUpItensEstrutura}
                url={url}
                image={image}
                nomeitem={nomeitem}
                descricao={descricao}
                valor={valor}
            />
        </div>
    )
}

export default CardItens;