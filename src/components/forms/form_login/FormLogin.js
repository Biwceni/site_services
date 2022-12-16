import { useContext } from 'react';
import { ContextValues } from '../../contexts/ContextsDados';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'
import MensagemInfo from '../../layout/mensagem_info/MensagemInfo';
import { FormLoginStyled } from './FormLoginStyled';

function FormLogin() {

     // Utilizando funções específicas do Context criado
    const { login, ativarMensagemBD, mensagemBD, tipoMensagemBD, setAtivarMensagemBD } = useContext(ContextValues)

    // Criando o schema de validação dos campos do formulário
    const schema = yup.object({
        email: yup.string().email("Digite um email válido(ex@ex.com)").required("Esse campo precisa ser preenchido"),
        senha: yup.string().required("Esse campo precisa ser preenchido")
    }).required()

    // Utilizando funções específicas do useForm e adicionando o schema criado a relação
    const { register, watch, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    // Fechar a mensagem de aviso, para evitar que se mantenha ativa em uma outra página que utilize o mesmo State
    const fecharMensagem = () => {
        setAtivarMensagemBD(false)
    }

    // Enviando os dados do formulário para serem tratados e analisados com os que existem no Banco de Dados
    const logar = (userDados, e) => {
        e.preventDefault()

        login(userDados)
    }

    return (
        <FormLoginStyled>
            <div>
                {
                    ativarMensagemBD && (
                        <MensagemInfo 
                        mensagemInfo={mensagemBD}
                        tipoMensagem={tipoMensagemBD}
                        />
                    )
                }
            </div>
            <div>
                <h1>Login</h1>
            </div>
            <hr />
            <form onSubmit={handleSubmit(logar)}>
                <div>
                    <label htmlFor='Email'>Email:</label>
                    <input type="text" placeholder="Insira o seu email" {...register("email", { required: true })} value={watch("email") ? watch("email") : ''} />
                    {
                        errors.email && <span>{errors.email?.message}</span>
                    }
                </div>
                <div>
                    <label htmlFor='Senha'>Senha: </label>
                    <input type="password" placeholder="Insira a sua senha" {...register("senha", { required: true })} value={watch("senha") ? watch("senha") : ''} />
                    {
                        errors.senha && <span>{errors.senha?.message}</span>
                    }
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <div>
                <Link to="/cadastro" onClick={fecharMensagem}>Cadastrar-se</Link>
            </div>
        </FormLoginStyled>
    )
}

export default FormLogin;