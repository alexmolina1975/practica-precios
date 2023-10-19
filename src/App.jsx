/* eslint-disable no-unused-vars */
import Button from './components/button/Button';
import Subtitle from './components/subtitle/Subtitle';
import Title from './components/title/Title';

import Div from './components/capa/Div';
import Parrafo from './components/textos/Parrafo';
import { StyledDiv } from './components/capa/styles';

import { GlobalStyles } from './styles/GlobalStyles';
import DivSup from './components/capa/DivSuperior';

import { useState } from 'react';
import Checkbox from './components/input/Checkbox';

const App = () => {
	// La variable se tiene que lamar como esta funcion: checked y setChecked
	// Si la ubiera llamado pepe tendria que ser SetPepe
	const [checked, setChecked] = useState(false);

	const numbers = [1, 2, 3, 4, 5];

	const users = [
		{
			name: 'ALEX',
			age: 25
		},

		{
			name: 'ALEXANDRA',
			age: 27
		},

		{
			name: 'BEBE JEFAZO',
			age: 3
		}
	];

	/*
	PRACTICA CAMBIO DE ESTADOS PULSANDO UN CHECKBOX  Renderizado condicionado
	return (
		
		// <> Se pone etiqueta vacia para que devuelva un padre con dos botones
		<>
			<header>
			
			<DivSup left='450' top='80' textT='Our princing' textP='' ></DivSup>
				
			</header>
			

			<Div shadowcolor='#EA5454' left='545' top='312' textT='Basic' textP={checked ? '24.99' : '255.99'}></Div>

			

			<br></br>
			<br></br>
			<Checkbox type='checkbox'  action={setChecked}></Checkbox>
        </>
    ) */

	// Renderizado mulitiple
	return (
		<>
			<h1>Lista</h1>

			{users.map(user => (
				<>
					<h2>{user.name}</h2>
					<p>{user.age}</p>
				</>
			))}
		</>
	);
};

export default App;
