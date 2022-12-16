import { useEffect } from "react";
import { MensagemInfoStyled } from "./MensagemInfoStyled";
import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";

function MensagemInfo({ mensagemInfo, tipoMensagem }){

    // Utilizando funções específicas do Context criado
    const { setAtivarMensagemBD } = useContext(ContextValues)

    // Carregamento de dados da mensagem
    useEffect(() => {
        // Condicional para analisar se há ou não uma mensagem ativa, caso contrário não será apresentada
        if(!mensagemInfo){
            setAtivarMensagemBD(false)
        } else{
            // Controle de apresentação e fechamento da mensagem em um intervalo de 2 segundos
            setTimeout(() => {
                setAtivarMensagemBD(false)
            }, 2000)
        }
        // Carregamento só será realizado caso mensagemInfo ou setAtivarMensagemBD sofrer alguma alteração
    }, [mensagemInfo, setAtivarMensagemBD])

    return(
        <>
            <MensagemInfoStyled tipoMensagem={tipoMensagem} >{mensagemInfo}</MensagemInfoStyled>
        </>
    )
}

export default MensagemInfo;