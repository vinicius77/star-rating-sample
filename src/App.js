import './App.css';
import StarRating from './StarRating';
import RatingStar from './RatingStar';
import BestRating from './BestRating/BestRating';

function App() {
	return (
		<div>
			<StarRating />
			<RatingStar stars="3.5" />
			<BestRating />
		</div>
	);
}

export default App;
