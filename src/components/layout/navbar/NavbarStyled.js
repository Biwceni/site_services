import styled from 'styled-components';

export const NavbarStyled = styled.header`
    display: flex;
    background-color: red;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    & > a{
        text-decoration: none;
        font-size: 3.5rem;
        font-weight: bolder;
        color: white;
    }

    & > svg {
        display: none;
    }

    nav ul {
        display: flex;
        list-style: none;
        align-items: center;
    }

    nav ul li a svg {
        width: 4.5rem;
        height: 4.5rem;
        color: white;
        margin-right: 10rem;
    }

    @media(max-width: 700px){
        flex-direction: column;
        align-items: flex-start;

        & > svg {
            display: block;
            position: absolute;
            align-self: flex-end;
            width: 3.5rem;
            height: 4rem;
            color: white;
            cursor: pointer; 
        }

        nav{
            display: none;
            ${({ navBarResponsividade }) => navBarResponsividade && {
            display: "block",
            width: "100%"
        }}
    }

    nav ul {
            ${({ navBarResponsividade }) => navBarResponsividade && {
            display: "block",
            flexDirection: "column"
            }}
        }

        nav ul li {
            ${({ navBarResponsividade }) => navBarResponsividade && {
                display: 'flex',
                justifyContent: 'center',
                margin: '2rem 0'
            }}
        }

        nav ul li a svg {
            ${({ navBarResponsividade }) => navBarResponsividade && {
                margin: "0"
            }}
        }
    }
`;