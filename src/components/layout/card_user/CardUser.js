import { CardUserStyled } from "./CardUserStyled";
import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";

function CardUser() {

    // Utilizando funções específicas do Context criado
    const { authAdmin, authUser, adminDadosBD, userDadosBD, logout } = useContext(ContextValues)

    // Acionando a função de Logout
    const ativarLogout = () => {
        logout()
    }

    return (
        <CardUserStyled>
                {
                    authAdmin &&
                    adminDadosBD.map((adminDados) => (
                        <div key={adminDados.idinfo}>
                            <p>{adminDados.nome}</p>
                        </div>
                    ))
                }
                {
                    authUser &&
                    userDadosBD.map((adminDados) => (
                        <div key={adminDados.idinfo}>
                            <p>{adminDados.nome}</p>
                        </div>
                    ))
                }
            <div>
                <button onClick={ativarLogout}>Logout</button>
            </div>
        </CardUserStyled>
    )
}

export default CardUser;