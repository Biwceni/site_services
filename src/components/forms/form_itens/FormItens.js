import { Link } from 'react-router-dom'
import { useForm }  from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { ContextValues } from '../../contexts/ContextsDados'
import MensagemInfo from '../../layout/mensagem_info/MensagemInfo'
import { FormItensStyled } from './FormItensStyled'

function FormItens(){

    // Criando o schema de validação dos campos do formulário
    const schema = yup.object({
        nomeitem: yup.string().required("Esse campo precisa ser preenchido"),
        descricao: yup.string().required("Esse campo precisa ser preenchido"),
        valor: yup.string().required("Esse campo precisa ser preenchido"),
        image: yup.mixed().test("required", "Imagem não selecionada", value => {
            return value && value.length;
        })
    }).required()

    // Utilizando funções específicas do Context criado
    const { adicionarItem, ativarMensagemBD, mensagemBD, tipoMensagemBD, setAtivarMensagemBD } = useContext(ContextValues)

    // Utilizando funções específicas do useForm e adicionando o schema criado a relação
    const { register, watch, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    // Fechar a mensagem de aviso, para evitar que se mantenha ativa em uma outra página que utilize o mesmo State
    const fecharMensagem = () => {
        setAtivarMensagemBD(false)
    }

    // Função principal, onde a medida que o valor for sendo digitado, o seu value vai ser alterado com base nas especificações impostas no método replace
    const maskValue = (e) => {
        const { value } = e.target
        e.target.value = cardNumber(value)
    }

    // Função auxiliar que vai realizar alterações no value por meio do método replace, usando como base expressões regulares(Regex) para se criar um padrão de máscara
    const cardNumber = (value) => {
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d)(\d{2})$/, "$1,$2")
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

        return value
    }

    // Enviando os dados do formulário para serem tratados e gravados no Banco de Dados
    const adicionarItemBD = (itensDados, e) => {
        e.preventDefault()

        adicionarItem(itensDados)
    }

    return(
        <FormItensStyled>
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
                <h1>Adicionar Itens</h1>
                <hr />
            </div>
            <form onSubmit={handleSubmit(adicionarItemBD)} encType="multipart/form-data">
                <div>
                    <label htmlFor='Nome do Item'>Nome do Item:</label>
                    <input type="text" { ...register("nomeitem", { required: true }) } placeholder="Insira o nome do item" value={watch("nomeitem") ? watch("nomeitem") : ''} />
                    {
                        errors.nomeitem && <span>{errors.nomeitem?.message}</span>
                    }
                </div>
                <div>
                <label htmlFor='Descrição do Item'>Descrição do Item:</label>
                    <input type="text" { ...register("descricao", {required: true}) } placeholder="Insira a descrição do item" value={watch("descricao") ? watch("descricao") : ''} />
                    {
                        errors.descricao && <span>{errors.descricao?.message}</span>
                    }
                </div>
                <div>
                    <label htmlFor='Valor do Item'>Valor do Item:</label>
                    <input type="text" { ...register("valor", { required: true }) } placeholder="Insira o valor do item" onChange={maskValue} />
                    {
                        errors.valor && <span>{errors.valor?.message}</span>
                    }
                </div>
                <div>
                <label htmlFor='Image do Item'>Imagem do Item:</label>
                    <input type="file" { ...register("image", { required: true }) } />
                    {
                        errors.image && <span>{errors.image?.message}</span>
                    }
                </div>
                <div>
                    <button type='submit'>Adicionar</button>
                </div>
            </form>
            <div>
                <Link to="/home_admin" onClick={fecharMensagem}>Voltar</Link>
            </div>
        </FormItensStyled>
    )
}

export default FormItens;