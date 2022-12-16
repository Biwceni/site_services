import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import Navbar from "../../layout/navbar/Navbar";
import CardItens from "../../layout/card_itens/CardItens";
import Footer from "../../layout/footer/Footer";
import { 
            HomeUserStyled, 
            HomeUserAlinhamentoStyled, 
            HomeUserEstruturaInternaStyled, 
            HomeUserBaseItensStyled, 
            HomeUserCardItensStyled,
            HomeUserAvisoItens } from "./HomeUserStyled";

function HomeUser() {

    // Utilizando funções específicas do Context criado
    const { listarItens, url } = useContext(ContextValues)

    return (
        <HomeUserStyled>
            <Navbar to='/home_user' />
            <HomeUserAlinhamentoStyled>
                <HomeUserEstruturaInternaStyled>
                    <HomeUserBaseItensStyled>
                        <h1>Itens</h1>
                        <HomeUserCardItensStyled>
                            {
                                listarItens.length > 0 &&
                                listarItens.map((itens) => (
                                    <CardItens
                                        iditens={itens.iditens}
                                        image={itens.image}
                                        url={url}
                                        nomeitem={itens.nomeitem}
                                        descricao={itens.descricao}
                                        valor={itens.valor}
                                        key={itens.iditens}
                                    />
                                ))
                            }
                            {
                                listarItens.length === 0 &&
                                <HomeUserAvisoItens>Não há Itens</HomeUserAvisoItens>
                            }
                        </HomeUserCardItensStyled>
                    </HomeUserBaseItensStyled>
                </HomeUserEstruturaInternaStyled>
                <Footer />
            </HomeUserAlinhamentoStyled>
        </HomeUserStyled>
    )
}

export default HomeUser;