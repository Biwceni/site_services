import { useContext, useEffect, useState } from 'react'
import { ContextValues } from '../../contexts/ContextsDados'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../api_config/ApiConfig'
import MensagemInfo from '../../layout/mensagem_info/MensagemInfo'
import { FormEditItensStyled } from './FormEditItensStyled'

function FormEditItens({ iditens }) {

    // State para receber os dados de um item em específico
    const [itensEditar, setItensEditar] = useState([])

    // Carregar os dados de um item em específico, como forma de apresentá-lo nos campos de edição
    useEffect(() => {
        api.get(`/listarItemEditar/${iditens}`)
            .then((response) => {
                setItensEditar(response.data.itens[0])
            })
            .catch((error) => console.log(error))
    // Caso o iditens mude, a função será chamada novamente
    }, [iditens])

    // Utilizando funções específicas do Context criado
    const { editarItem, ativarMensagemBD, mensagemBD, tipoMensagemBD, setAtivarMensagemBD } = useContext(ContextValues)

    // Utilizando funções específicas do useForm e mantendo um defaultValues nos campos
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            nomeitem: "",
            descricao: "",
            valor: "",
            image: ""
        }
    })

    // Vai servir para carregar os dados dos itens no momento em que o usuário entrar na página
    useEffect(() => {

        // O valor recebido vai ser colocado em uma constante
        const baseValor = itensEditar.valor

        // Essa constante vai ser tratada pelo método toLocaleString, de forma que visualmente vai ficar no formato de moeda, assim não necessitando de utilizar máscara para realizar essa alteração no momento
        const novoValor = baseValor?.toLocaleString('pt-br', { minimumFractionDigits: 2 }) || ''

        // O método do useForm, o setValue vai servir para atribuir valor aos campos, tendo como referência o seu nome, cada campo vai ganhar um valor referente ao que está sendo consumido pelo State.
        // A função interna do setValue, shouldTouch como false, não vai deixar que o valor, caso se apague algum dos seus caracteres, não perca a sua identidade inicial, assim mantendo sua consistência e coerência
        setValue("nomeitem", itensEditar.nomeitem, { shouldTouch: false })
        setValue("descricao", itensEditar.descricao, { shouldTouch: false })
        setValue("valor", novoValor, { shouldTouch: false })
        // Toda vez que o itensEditar ou o setValue se alterar, esse método vai ser chamado novamente
    }, [itensEditar, setValue])


    // Mesmo utilizando o método toLocaleString para formatar o dado recebido, após algum dos seu caracteres serem apagados ou adicionados, ele acaba perdendo sua formatação, que é apenas funcional quando está se trabalhando com algum valor fixo.
    // Com base nisso, se faz necessário utilizar a função para implementação da máscara, que vai manter a formatação do dado, independente da alteração feita
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

    // Fechar a mensagem de aviso, para evitar que se mantenha ativa em uma outra página que utilize o mesmo State
    const fecharMensagem = () => {
        setAtivarMensagemBD(false)
    }

    // Enviando os dados do formulário para serem tratados e gravados no Banco de Dados
    const editarItensBD = (itensDados, e) => {
        e.preventDefault()

        editarItem(itensDados, iditens)
    }

    return (
        <FormEditItensStyled>
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
            <form onSubmit={handleSubmit(editarItensBD)} encType="multipart/form-data">
                <div>
                    <label htmlFor='Nome do Item'>Nome do Item:</label>
                    <input type="text" {...register("nomeitem", { required: false })} placeholder="Insira o nome do item" />
                </div>
                <div>
                    <label htmlFor='Descrição do Item'>Descrição do Item:</label>
                    <input type="text" {...register("descricao", { required: false })} placeholder="Insira a descrição do item" />
                </div>
                <div>
                    <label htmlFor='Valor do Item'>Valor do Item:</label>
                    <input type="text" {...register("valor", { required: false })} placeholder="Insira o valor do item" onChange={maskValue} />
                </div>
                <div>
                    <label htmlFor='Image do Item'>Imagem do Item:</label>
                    <input type="file" {...register("image", { required: false })} />
                </div>
                <div>
                    <button type='submit'>Editar</button>
                </div>
            </form>
            <div>
                <Link to="/home_admin" onClick={fecharMensagem}>Voltar</Link>
            </div>
        </FormEditItensStyled>
    )
}

export default FormEditItens;