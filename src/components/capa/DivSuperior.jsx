import ParrafoSup from '../textos/ParrafoSup';
import Title from '../title/Title';
import { StyledDivSup } from './styles';

const DivSup = ({ textP, textT, left, top }) => {
	return (
		<StyledDivSup left={left} top={top}>
			<Title text={textT}></Title>
			<ParrafoSup text={textP}></ParrafoSup>
		</StyledDivSup>
	);
};

export default DivSup;
