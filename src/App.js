import { ContextBase, ContextValues } from './components/contexts/ContextsDados';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Container from './components/layout/container/Container';
import Login from './components/pages/login/Login';
import Cadastro from './components/pages/cadastro/Cadastro';
import HomeAdmin from './components/pages/home_admin/HomeAdmin';
import HomeUser from './components/pages/home_user/HomeUser';
import AdicionarItens from './components/pages/adicionar_itens/AdicionarItens';
import EditarItens from './components/pages/editar_itens/EditarItens';
import CarrinhoPedidos from './components/pages/carrinho_pedidos/CarrinhoPedidos';
import AvisoErro from './components/pages/aviso_erro/AvisoErro';
import Loading from './components/layout/loading/Loading';

function App() {

  // PrivateUser e PrivateAdmin são funções que restringem a navegação do usuário e do admin a páginas específicas

  const PrivateUser = ({ children }) => {

    // Utilizando funções específicas do Context criado
    const { authUser, loading } = useContext(ContextValues)

    // Loading como true seu componente será carregado
    if (loading) {
      return <Loading />
    }

    // Caso não seja um User logado tentando acessar a página, o indivíduo será mandado para a página de aviso
    if (!authUser) {
      return <Navigate to="/aviso_erro" />
    }

    return children;
  }

  const PrivateAdmin = ({ children }) => {

    // Utilizando funções específicas do Context criado
    const { authAdmin, loading } = useContext(ContextValues)

    // Loading como true seu componente será carregado
    if (loading) {
      return <Loading />
    }

    // Caso não seja um Admin logado tentando acessar a página, o indivíduo será mandado para a página de aviso
    if (!authAdmin) {
      return <Navigate to="/aviso_erro" />
    }

    return children;
  }

  // PrivateAvisoErro para evitar que a página /aviso_erro não seja acessada de forma indevida

  const PrivateAvisoErro = ({ children }) => {

    // Utilizando funções específicas do Context criado
    const { authAdmin, authUser } = useContext(ContextValues)

    // Se o Admin e o User não estejam logados, então caso tentem acessar esse página, o indivíduo será enviado para a página inicial
    if (!authAdmin && !authUser) {
      return <Navigate to='/' />
    }

    return children;
  }

  return (
    <BrowserRouter>
      <ContextBase>
        <Container>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route path='/cadastro' element={<Cadastro />} ></Route>
            <Route path='/home_admin' element={<PrivateAdmin><HomeAdmin /></PrivateAdmin>}></Route>
            <Route path='/home_user' element={<PrivateUser><HomeUser /></PrivateUser>}></Route>
            <Route path='/adicionar_itens' element={<PrivateAdmin><AdicionarItens /></PrivateAdmin>}></Route>
            <Route path='/editar_itens/:iditens' element={<PrivateAdmin><EditarItens /></PrivateAdmin>}></Route>
            <Route path='/carrinho_pedidos' element={<PrivateUser><CarrinhoPedidos /></PrivateUser>}></Route>
            <Route path='/aviso_erro' element={<PrivateAvisoErro><AvisoErro /></PrivateAvisoErro>}></Route>
          </Routes>
        </Container>
      </ContextBase>
    </BrowserRouter>
  );
}

export default App;