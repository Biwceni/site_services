import PopUpAviso from "../pop_up_aviso/PopUpAviso";
import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import { ContainerStyled } from "./ContainerStyled";

function Container({ children }){

    // Utilizando funções específicas do Context criado
    const { mensagemAviso, ativarAviso } = useContext(ContextValues)

    return(
        <>
            <PopUpAviso ativarAvisoPopUp={ativarAviso} msgAviso={mensagemAviso} />
            <ContainerStyled>{children}</ContainerStyled>
        </>
    )
}

export default Container;