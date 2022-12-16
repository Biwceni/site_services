import { useContext, useState } from 'react';
import { ContextValues } from '../../contexts/ContextsDados';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import CardUser from '../card_user/CardUser';
import { NavbarStyled } from "./NavbarStyled";

function Navbar({ to }) {

    // Utilizando funções específicas do Context criado
    const { authUser } = useContext(ContextValues)

    // Criando State que vai servir para ativar a parte responsiva da NavBar, quando o GoThreeBars e o AiOutlineClose aparecerem
    const [navBarResponsividade, setNavBarResponsividade] = useState(false)

    // Função que vai mudar o Estado interno do State, para a ativação do componente responsivo
    const ativarResponsividade = () => {
        setNavBarResponsividade(!navBarResponsividade)
    }

    return (
        <NavbarStyled navBarResponsividade={navBarResponsividade} >
            <Link to={to}>Services</Link>
            {
                navBarResponsividade ?
                    <AiOutlineClose onClick={ativarResponsividade} /> :
                    <GoThreeBars onClick={ativarResponsividade} />
            }
            <nav>
                <ul>
                    <li>
                        {
                            authUser && (
                                <Link to='/carrinho_pedidos'>
                                    <BsCart4 />
                                </Link>
                            )
                        }
                    </li>
                    <li>
                        <CardUser />
                    </li>
                </ul>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar;