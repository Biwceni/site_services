import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api_config/ApiConfig";

// Criando um Context para a agregação do value
export const ContextValues = createContext()

export const ContextBase = ({ children }) => {

    // Criação de States para a absorção e distribuição de dados
    const [mensagemBD, setMensagemBD] = useState("")
    const [tipoMensagemBD, setTipoMensagemBD] = useState("")
    const [ativarMensagemBD, setAtivarMensagemBD] = useState(false)
    const [userDadosBD, setUserDadosBD] = useState([])
    const [adminDadosBD, setAdminDadosBD] = useState([])
    const [sessaoAtiva, setSessaoAtiva] = useState(false)
    const [listaPedidosBD, setListaPedidosBD] = useState([])
    const [userPedidoBD, setUserPedidoBD] = useState()
    const [mensagemAviso, setMensagemAviso] = useState('')
    const [ativarAviso, setAtivarAviso] = useState(false)
    const [loading, setLoading] = useState(true)
    const [listarItens, setListarItens] = useState([])
    const [url, setUrl] = useState('')

    // Instanciando a função do react-router-dom para realizar a navegação entre páginas
    const navigate = useNavigate()

    // Procedimento que vai servir para os dados de instanciamento da sessão serem salvos no Browser, indicando a ativação da mesma, sendo essa uma ação importante para se deixar ativa
    // api.defaults.withCredentials = true

    // Função de carregamento de dados do Usuário ou Administrador logado na página
    useEffect(() => {

        const headersBase = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        // Recebendo a confirmação se a sessão do User ou do Admin está ativa ou não, vai servir como uma função auxiliar
        api.get("/confirmarSession", {withCredentials: true},headersBase)
            .then((response) => {
                if (response.data.sessionAtiva) {
                    setSessaoAtiva(response.data.sessionAtiva)
                } else {
                    setSessaoAtiva(response.data.sessionAtiva)
                }
            })
            .catch((errorBase) => console.log(errorBase))

        // Resgatando o Token salvo no localStorage do Browser
        const token = localStorage.getItem("token")

        // Se houver um Token ativo, indica que uma sessão está ativa, assim dependendo de qual sessão está ativa, os seus respectivos States vão ser carregados
        if (token) {
            // Mandar o Token pelo headers para ser analisado no servidor
            const headers = {
                'headers': {
                    'x-acess-token': token
                }
            }

            api.get("/loginAuth", {withCredentials: true}, headers)
                .then((response) => {
                    // Carregando os dados do Admin ou do User ativo, caso o tempo da sessão acabe ou dê algum erro de validação do Token, a sessão vai ser encerrada
                    if (response.data.authAdmin) {
                        setAdminDadosBD(response.data.admin)
                        setUserDadosBD(null)
                    }
                    else if (response.data.authUser) {
                        setUserDadosBD(response.data.user)
                        setAdminDadosBD(null)
                    } 
                    else {
                        setAtivarAviso(true)
                        setMensagemAviso(response.data.msg)
                        localStorage.removeItem("token")
                        setTimeout(() => {
                            navigate("/")
                            setAtivarAviso(false)
                        }, 2000)
                    }
                })
                .catch((err) => console.log(err))
        // Caso o Token não estiver ativo, então ele não vai carrgar nenhuma dado da sessão
        } else {

            // Não havendo Token, mas a sessão estando ativa, o auxiliar da sessão criado anteriormente vai fazer essa verificação, para caso ocorra, além de voltar a página inicial, a sessão também será finalizada
            if (sessaoAtiva) {
                const headers = {
                    'headers': {
                        'x-acess-token': token
                    }
                }

                api.get("/loginAuth", {withCredentials: true}, headers)
                    .then((response) => {
                        if (response.data.semToken) {
                            setAtivarAviso(true)
                            setMensagemAviso(response.data.msg)
                            setTimeout(() => {
                                navigate("/")
                                setAtivarAviso(false)
                            }, 2000)
                        }
                    })
                    .catch((err) => console.log(err))
            }

            // Vai manter tanto o User como o Admin sem dados internos, servindo de precaução caso haja algum bug que possa manter seus dados ativos mesmo com o fim da sessão
            setUserDadosBD(null)
            setAdminDadosBD(null)
        }

        // Serve como um controlador de renderização dos componentes, enquanto dos dados da sessão não serem totalmente carregados a página vai ficar com um Loading, depois de carregados, ele sairá e a página vai ser apresentada em seu totalidade
        setLoading(false)

    // Todo esse procedimento só vai ser ativo quando houver alguma mudança no navigate ou na sessaoAtiva
    }, [navigate, sessaoAtiva])

    // Utilizando esse procedimento aqui no Context, evito de repeti-lo mais de uma vez em outros componentes que precisam do carregamento dos itens
    useEffect(() => {

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.get("/listarItens", headers)
            .then((response) => {
                setListarItens(response.data.itens)
                setUrl(response.data.url)
            })
            .catch((error) => console.log(error))
    // Todo esse procedimento só vai ser ativo quando houver alguma mudança no navigate ou no listarItens
    }, [navigate])

    // Instanciando a função cadastro
    const cadastro = (userDados) => {

        // Limpando o State de Mensagem para que possa ser disparada a mensagem mais de uma vez, quando a função for ativada
        setMensagemBD("")

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.post("/cadastro", {
            nome: userDados.nome,
            email: userDados.email,
            senha: userDados.senha
        }, {withCredentials: true}, headers)
            .then((response) => {
                if (response.data.cadastrado) {
                    setAtivarMensagemBD(true)
                    setMensagemBD(response.data.msg)
                    setTipoMensagemBD(response.data.tipoMsg)
                }
                if (!response.data.cadastrado) {
                    setAtivarMensagemBD(true)
                    setMensagemBD(response.data.msg)
                    setTipoMensagemBD(response.data.tipoMsg)
                }
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função login
    const login = (userDados) => {

        // Limpando o State de Mensagem para que possa ser disparada a mensagem mais de uma vez, quando a função for ativada
        setMensagemBD("")

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.post("/login", {
            email: userDados.email,
            senha: userDados.senha
        }, {withCredentials: true}, headers)
            .then((response) => {
                // Quando o Admin ou o User forem confirmados, além de salvar os seus dados em um State, foi resgatado o Token recebido do servidor e salvo lo localStorage do Browser, para servir de parâmetro de instanciamento da sessão
                if (response.data.loginAdmin) {
                    const token = response.data.token
                    localStorage.setItem("token", token)
                    setAdminDadosBD(response.data.admin)
                    setUserDadosBD(null)
                    navigate("/home_admin")
                }
                if (response.data.loginUser) {
                    const token = response.data.token
                    localStorage.setItem("token", token)
                    setUserDadosBD(response.data.user)
                    setAdminDadosBD(null)
                    navigate("/home_user")
                } else {
                    setAtivarMensagemBD(true)
                    setMensagemBD(response.data.msg)
                    setTipoMensagemBD(response.data.tipoMsg)
                }
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função logout
    const logout = () => {

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.get("/logout", {withCredentials: true}, headers)
            .then((response) => {
                // Ativando mensagem e eliminando o Token, caso ele ainda estiver ativo
                // Forçar o auxiliar sessãoAtiva para false, evitando um bug de análise por conta de renderização e carregamento dos dados da sessão
                setAtivarAviso(true)
                setMensagemAviso(response.data.msg)
                setTimeout(() => {
                    navigate('/')
                    setAtivarAviso(false)
                    setSessaoAtiva(false)
                    const token = localStorage.getItem("token")
                    if (token) {
                        localStorage.removeItem("token")
                    }
                }, 2000)
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função adicionar item
    const adicionarItem = (itensDados) => {

        // Limpando o State de Mensagem para que possa ser disparada a mensagem mais de uma vez, quando a função for ativada
        setMensagemBD("")

        // Os dados vindos do formulário estão no formato multipart/form-data, com isso antes de enviá-los, precisam ser tratados, com isso foi usado o objeto FormData para formatar os dados que chegaram e após o procedimento foram enviados ao servidor
        
        const formData = new FormData()
        formData.append('image', itensDados.image[0])
        formData.append('nomeitem', itensDados.nomeitem)
        formData.append('descricao', itensDados.descricao)
        formData.append('valor', itensDados.valor)

        // headers é enviado com uma diretiva específica do tipo de dado que está sendo enviado ao servidor
        const headers = {
            'headers': {
                'Content-Type': 'multipart/form-data'
            }
        }

        api.post("/adicionarItens", formData, headers)
            .then((response) => {
                setAtivarMensagemBD(true)
                console.log(response.data.msg)
                setMensagemBD(response.data.msg)
                setTipoMensagemBD(response.data.tipoMsg)
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função editar item
    const editarItem = (itensDados, iditens) => {

        // Limpando o State de Mensagem para que possa ser disparada a mensagem mais de uma vez, quando a função for ativada
        setMensagemBD("")

        // Realizando o tratamento do tipo de imagem que é permitido ser enviada para o Banco de Dados.
        // Se houver uma imagem que está sendo enviada
        if(itensDados.image){
            // Verificar os formatos de imagens que podem ser aceitas
            const extensaoImage = ['image/png', 'image/jpg', 'image/jpeg'].find(
                formatoAceito => formatoAceito === itensDados.image[0].type);
    
            // Se a imagem recebida for um desses formatos
            if(extensaoImage){
                // Por conta dos dados do formulário estarem no formato multipart/form-data, então eles tem que ser tratados e formatados por meio do objeto FormData
                const formData = new FormData()
                formData.append('image', itensDados.image[0])
                formData.append('nomeitem', itensDados.nomeitem)
                formData.append('descricao', itensDados.descricao)
                formData.append('valor', itensDados.valor)
    
                // headers é enviado com uma diretiva especifica do tipo de dado que está sendo enviado ao servidor
                const headers = {
                    'headers': {
                        'Content-Type': 'multipart/form-data'
                    }
                }
    
                api.patch(`/editarItens/${iditens}`, formData, headers)
                    .then((response) => {
                        setAtivarMensagemBD(true)
                        setMensagemBD(response.data.msg)
                        setTipoMensagemBD(response.data.tipoMsg)
                    })
                    .catch((error) => console.log(error))
            } 
            // Caso a extensão da imagem for false, uma mensagem vai ser disparada ao usuário
            else{
                setAtivarMensagemBD(true)
                setMensagemBD("Erro no Upload")
                setTipoMensagemBD("erro")
            }
        // Caso não houver uma imagem sendo enviada, o padrão de envio vai se manter o mesmo, apenas a questão da imagem vai ser tratada no próprio servidor
        } else{
            // Por conta dos dados do formulário estarem no formato multipart/form-data, então eles tem que ser tratados e formatados por meio do objeto FormData
            const formData = new FormData()
            formData.append('image', itensDados.image[0])
            formData.append('nomeitem', itensDados.nomeitem)
            formData.append('descricao', itensDados.descricao)
            formData.append('valor', itensDados.valor)

            // headers é enviado com uma diretiva especifica do tipo de dado que está sendo enviado ao servidor
            const headers = {
                'headers': {
                    'Content-Type': 'multipart/form-data'
                }
            }

            api.patch(`/editarItens/${iditens}`, formData, headers)
                .then((response) => {
                    setAtivarMensagemBD(true)
                    setMensagemBD(response.data.msg)
                    setTipoMensagemBD(response.data.tipoMsg)
                })
                .catch((error) => console.log(error))
        }
    }

    // Instanciando a função excluir itens
    const excluirItens = (iditens) => {
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.delete(`/deletaritens/${iditens}`, headers)
            .then((response) => {
                alert(response.data.msg)
                setListarItens(listarItens.filter((itens) => itens.iditens !== iditens))
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função adicionar pedido
    const adicionarPedido = (nomepedido, qtdpedido, valorfinal, userpedido) => {
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.post("/confirmarPedido", {
            nomepedido: nomepedido,
            qtdpedido: qtdpedido,
            valorfinal: valorfinal,
            userpedido: userpedido
        }, headers)
            .then((response) => {
                alert(response.data.msg)
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função deletar pedido
    const deletarPedido = (idpedidos) => {

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.delete(`/deletarPedido/${idpedidos}`, headers)
            .then((response) => {
                alert(response.data.msg)
                // Realizar a filtragem dentro do State, para melhor apresentação no Front-End, eliminando no momento da exclusão o pedido em específico
                setListaPedidosBD(listaPedidosBD.filter((pedido) => pedido.idpedidos !== idpedidos))
            })
            .catch((error) => console.log(error))
    }

    // Instanciando a função finalizar pedidos
    const finalizarPedidos = () => {

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        api.delete(`/finalizarPedido/${userPedidoBD}`, headers)
            .then((response) => {
                alert(response.data.msg)
                // Realizar a filtragem dentro do State, para melhor apresentação no Front-End, eliminando no momento da exclusão o pedido ou os pedidos em específico
                setListaPedidosBD(listaPedidosBD.filter((pedido) => pedido.userpedido !== userPedidoBD))
            })
            .catch((error) => console.log(error))
    }

    return (
        <ContextValues.Provider value={{ authAdmin: !!adminDadosBD, adminDadosBD, loading, cadastro, login, logout, adicionarItem, editarItem, excluirItens, adicionarPedido, deletarPedido, finalizarPedidos, ativarMensagemBD, setAtivarMensagemBD, mensagemBD, tipoMensagemBD, listarItens, url, setListaPedidosBD, listaPedidosBD, setUserPedidoBD, mensagemAviso, ativarAviso, authUser: !!userDadosBD, userDadosBD }}>{children}</ContextValues.Provider>
    )
}