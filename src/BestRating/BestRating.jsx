import React from 'react';
import './styles.css';

class BestRating extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			rating: this.props.rating || null,
			temp_rating: null,
		};
	}

	handleMouseover(rating) {
		this.setState((prev) => ({
			rating,
			temp_rating: prev.rating,
		}));
	}

	handleMouseout() {
		// this.state.rating = this.state.temp_rating;
		// this.setState({ rating: this.state.rating });
		this.setState((prev) => ({
			rating: prev.temp_rating,
		}));
	}

	rate(rating) {
		this.setState({
			rating,
			temp_rating: rating,
		});
	}

	render() {
		const { rating } = this.state;
		console.log((rating + 1) * 10);
		let stars = [];
		for (let i = 0; i < 10; i++) {
			//console.log('i', i);
			let klass = 'ion-ios-star-outlines';
			if (this.state.rating >= i && this.state.rating !== null) {
				klass = 'ion-ios-start';
			}
			stars.push(
				<i
					key={i}
					style={{
						display: 'inline-block',
						width: '7px',
						overflow: 'hidden',
						direction: i % 2 === 0 ? 'ltr' : 'rtl',
					}}
					className={klass}
					onMouseOver={() => this.handleMouseover(i)}
					onClick={() => this.rate(i)}
					onMouseOut={() => this.handleMouseout()}
				/>
			);
		}
		return <div className="rating">{stars}</div>;
	}
}

export default BestRating;
