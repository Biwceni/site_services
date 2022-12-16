import { useContext } from "react";
import { ContextValues } from "../../contexts/ContextsDados";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";
import CardItens from "../../layout/card_itens/CardItens";
import Footer from "../../layout/footer/Footer";
import {
            HomeAdminStyled,
            HomeAdminEstruturaInternaStyled,
            HomeAdminItensStyled,
            HomeAdminAdicionarItensStyled,
            HomeAdminBaseItensStyled,
            HomeAdminCardItensEstruturaStyled } from "./HomeAdminStyled";

function HomeAdmin() {

    // Utilizando funções específicas do Context criado
    const { listarItens, url } = useContext(ContextValues)

    return (
        <HomeAdminStyled>
            <Navbar to='/home_admin' />
            <HomeAdminEstruturaInternaStyled>
                <HomeAdminItensStyled>
                    <HomeAdminAdicionarItensStyled>
                        <Link to='/adicionar_itens'>Adicionar Itens</Link>
                    </HomeAdminAdicionarItensStyled>
                    <HomeAdminBaseItensStyled>
                        <h1>Itens</h1>
                        <HomeAdminCardItensEstruturaStyled>
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
                                <h1>Não há Itens Adicionados</h1>
                            }
                        </HomeAdminCardItensEstruturaStyled>
                    </HomeAdminBaseItensStyled>
                </HomeAdminItensStyled>
                <Footer />
            </HomeAdminEstruturaInternaStyled>
        </HomeAdminStyled>
    )
}

export default HomeAdmin;