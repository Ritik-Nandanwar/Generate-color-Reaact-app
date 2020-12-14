import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Shades from './Components/Shades';

function App() {
	useEffect(() => {
		const select = window.M;

		select.Modal.init(document.querySelectorAll('.modal'));
		select.Materialbox.init(document.querySelectorAll('.materialboxed'));

		// var elems = document.querySelectorAll('.materialboxed');
		// select.Materialbox.init(elems);
	});
	const [color, setColor] = useState('red');
	const onInputChange = (value) => {
		setColor(value);
	};
	return (
		<div>
			<Header color={color} onInputChange={onInputChange} />
			<Shades color={color} />
		</div>
	);
}

export default App;
