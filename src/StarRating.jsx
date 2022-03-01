import React, { useEffect, useState } from 'react';
import './App.css';

const StarRating = () => {
	const [value, setValue] = useState(0);
	const setProperty = ({ target }) => {
		setValue(target.value);
		console.log(target.value * 20);
		document.documentElement.style.setProperty('--value', parseFloat(target.value, 10));
	};

	useEffect(() => {
		if (value !== 0) {
			setValue(value);
		}
	}, [value]);

	return (
		<div>
			<label className="rating-label">
				<strong>Rating</strong>
				<input
					className="rating"
					max="5"
					step="0.5"
					type="range"
					value={value}
					onChange={setProperty}
				/>
			</label>
		</div>
	);
};

export default StarRating;
