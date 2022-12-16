import { useParams } from "react-router-dom";
import FormEditItens from "../../forms/form_edit_itens/FormEditItens";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { 
            EditarItensStyled, 
            EditarItensAlinhamentoStyled, 
            EditarItensBaseStyled, 
            EditarItensEstruturaStyled } from "./EditarItensStyled";

function EditarItens() {

    // Utilizando o método useParms para recuperar o valor em específico, vindo do parâmetro adicionado ao Link
    const { iditens } = useParams();

    return (
        <EditarItensStyled>
            <Navbar to='/home_admin' />
            <EditarItensAlinhamentoStyled>
                <EditarItensBaseStyled>
                    <EditarItensEstruturaStyled>
                        <FormEditItens iditens={iditens} />
                    </EditarItensEstruturaStyled>
                </EditarItensBaseStyled>
                <Footer />
            </EditarItensAlinhamentoStyled>
        </EditarItensStyled>
    )
}

export default EditarItens;