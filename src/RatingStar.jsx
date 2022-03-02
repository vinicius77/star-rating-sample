import React, { useState, useEffect } from 'react';

const Star = ({ starId, marked }) => {
	return (
		<span
			starid={starId}
			role="button"
			style={{
				color: marked ? '#FFBE14' : '#EAEAEA',
				cursor: 'pointer',
				fontSize: '25px',
			}}
		>
			{'\u2605'}
		</span>
	);
};
const RatingStar = (props) => {
	const [selection, setSelection] = useState(0);
	const [rating, setRating] = useState(0);

	const onHoverOver = (event) => {
		let starId = 0;
		if (event?.target?.getAttribute('starid')) {
			starId = event.target.getAttribute('starid');
		}
		setSelection(starId);
	};

	const onSetStarRating = (event) => {
		if (!event?.target) {
			return null;
		}
		const value = event.target.getAttribute('starid');
		setRating(value);

		const starValue = parseInt(value * 20, 10);

		console.log(starValue);
	};

	useEffect(() => {
		if (rating > 0) {
			setRating(rating / 20);
		}
	}, [rating]);

	return (
		<div
			className="mb4-ns"
			onMouseOver={onHoverOver}
			onMouseOut={() => onHoverOver(null)}
			onClick={onSetStarRating}
		>
			{Array.from({ length: 5 }, (_v, index) => (
				<Star
					key={index}
					starId={index + 1}
					marked={selection ? selection > index : rating > index}
				/>
			))}
		</div>
	);
};

export default RatingStar;
