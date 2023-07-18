import './home.scss'
import Map from "./Maps/Map";
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";

function Home() {
	return (
		<>
			<div className='home'>
			<WelcomeTitle />
				<Map />
			</div>
		</>
	);
}

export default Home;
