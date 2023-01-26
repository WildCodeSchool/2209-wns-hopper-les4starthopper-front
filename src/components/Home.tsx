import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "./maps/Map";
import "./Home.css";
import DocData from "./Data.json";
import { MainSearchBar } from "./SearchBar/MainSearchBar";

function Home() {
	return (
		<div className='mainContainer'>
			<MainSearchBar
				placeholder='Entrez votre requête ici...'
				data={DocData}
			/>
			<Map />
		</div>
	);
}

export default Home;
