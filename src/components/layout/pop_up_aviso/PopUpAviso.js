import { PopUpAvisoStyled } from "./PopUpAvisoStyled";

function PopUpAviso({ msgAviso, ativarAvisoPopUp }){
    return(
        <PopUpAvisoStyled ativarAvisoPopUp={ativarAvisoPopUp}>
            <div>
                <p>{msgAviso}</p>
            </div>
        </PopUpAvisoStyled>
    )
}

export default PopUpAviso;