import Navbar from "../../layout/navbar/Navbar";
import FormItens from "../../forms/form_itens/FormItens";
import Footer from "../../layout/footer/Footer";
import { 
            AdicionarItensStyled, 
            AdicionarItensAlinhamentoStyled, 
            AdicionarItensBaseStyled, 
            AdicionarItensEstruturaStyled } from "./AdicionarItensStyled";

function AdicionarItens() {
    return (
        <AdicionarItensStyled>
            <Navbar to='/home_admin' />
            <AdicionarItensAlinhamentoStyled>
                <AdicionarItensBaseStyled>
                    <AdicionarItensEstruturaStyled>
                        <FormItens />
                    </AdicionarItensEstruturaStyled>
                </AdicionarItensBaseStyled>
                <Footer />
            </AdicionarItensAlinhamentoStyled>
        </AdicionarItensStyled>
    )
}

export default AdicionarItens;