import React from "react";
import "leaflet/dist/leaflet.css";

import { Route, Routes } from "react-router-dom";
import DocData from "../../components/Data.json";
import Map from "../Maps/Map";

import "./Main.scss";
import Home from "../Home";
import Contact from "../Contact/Contact";
import Cities from "../Cities/Cities";
import Signup from "../Signup";
import { SearchBar } from "../SearchBar/SearchBar";
import BackOffice from "../../pages/BackOffice";

const Main = () => {
	return (
		<div>
			<SearchBar
				className='main-searchbar'
				placeholder='Entrez votre requête ici...'
				data={DocData}
			/>
			<div className='mainContainer'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cities' element={<Cities />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/back-office' element={<BackOffice />} />
				</Routes>
			</div>
		</div>
	);
};


export default Main;
