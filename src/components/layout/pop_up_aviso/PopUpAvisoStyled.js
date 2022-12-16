import styled from "styled-components";

export const PopUpAvisoStyled = styled.div`
    position: absolute;
    display: ${({ ativarAvisoPopUp }) => ativarAvisoPopUp ? 'flex' : 'none'};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: rgba(177, 177, 177, 0.95);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        height: 10rem;
        width: 50rem;
        border: 2px solid black;
        background-color: white;
        align-items: center;
        justify-content: center;

        p{
            font-size: 2rem;
            font-weight: bold;
        }
    }
`;