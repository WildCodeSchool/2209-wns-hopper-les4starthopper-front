import React from "react";
import Map from "./maps/Map";
import "./Home.css";
import DocData from "./Data.json";
import { MainSearchBar } from "./SearchBar/MainSearchBar";

function Home() {
	return (
		<>
		<div className=""></div>
		<div className='mainContainer'>
			<Map />
		</div>
		</>
	);
}

export default Home;
