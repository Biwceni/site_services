import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;

        @media(max-width: 1100px){
            font-size: 55%;
        }

        @media(max-width: 950px){
            font-size: 50%;
        }

        @media(max-width: 650px){
            font-size: 45%;
        }

        @media(max-width: 550px){
            font-size: 40%;
        }

        @media(max-width: 450px){
            font-size: 35%;
        }

        @media(max-width: 400px){
            font-size: 30%;
        }

        @media(max-width: 350px){
            font-size: 25%;
        }

        @media(max-width: 300px){
            font-size: 20%;
        }

        @media(max-height: 550px){
            font-size: 50%;
        }

        @media(max-height: 450px){
            font-size: 38%;
        }

        @media(max-height: 380px){
            font-size: 30%;
        }

        @media(max-height: 300px){
            font-size: 20%;
        }
    }
`;