import loading from "../../../img/loading.svg"
import { LoadingStyled } from "./LoadingStyled";

function Loading(){
    return(
        <LoadingStyled>
            <img src={loading} alt="Loading"/>
        </LoadingStyled>
    )
}

export default Loading;