import FormLogin from "../../forms/form_login/FormLogin";
import { LoginStyled, 
         LoginEstruturaStyled } from "./LoginStyled";

function Login() {
    return (
        <LoginStyled>
            <LoginEstruturaStyled>
                <FormLogin />
            </LoginEstruturaStyled>
        </LoginStyled>
    )
}

export default Login;