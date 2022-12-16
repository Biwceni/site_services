import FormCadastro from "../../forms/form_cadastro/FormCadastro";
import { CadastroStyled, 
         CadastroEstruturaStyled } from "./CadastroStyled";

function Cadastro() {
    return (
        <CadastroStyled>
            <CadastroEstruturaStyled>
                <FormCadastro />
            </CadastroEstruturaStyled>
        </CadastroStyled>
    )
}

export default Cadastro;