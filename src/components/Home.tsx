import Map from "./Maps/Map";
import "./Home.scss";
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";

function Home() {
	return (
		<>
			<div className='mainContainer'>
			<WelcomeTitle />
				<Map />
			</div>
		</>
	);
}

export default Home;
