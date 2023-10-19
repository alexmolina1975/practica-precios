
import Parrafo from "../textos/Parrafo";
import Title from "../title/Title";
import { StyledDiv } from "./styles";


const Div = ({textP, textT, shadowcolor, left, top}) => {

    
    return <StyledDiv shadowcolor={shadowcolor} left={left} top={top}>

            <Title text={textT}></Title>
            <Parrafo text={textP}></Parrafo>
            
        </StyledDiv>;

}


export default Div;