import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import { AvisoErroStyled } from "./AvisoErroStyled";

function AvisoErro(){

    // Utilizando funções específicas do Context criado
    const { authAdmin, authUser } = useContext(ContextValues)

    return(
        <AvisoErroStyled>
            <h1>Erro ao Acessar Página</h1>
            <div>
                {
                    !authAdmin && (
                        <Link to='/home_user'>Voltar</Link>
                    )
                }
                {
                    !authUser && (
                        <Link to='/home_admin'>Voltar</Link>
                    )
                }
            </div>
        </AvisoErroStyled>
    )
}

export default AvisoErro;