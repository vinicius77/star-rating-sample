import './App.css';
import StarRating from './StarRating.jsx';
import RatingStar from './RatingStar.jsx';

function App() {
	return (
		<div>
			<StarRating />
			<RatingStar stars="3.5" />
		</div>
	);
}

export default App;
