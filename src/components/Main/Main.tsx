import React from "react";
import "leaflet/dist/leaflet.css";

import { Route, Routes, useLocation } from "react-router-dom";
import DocData from "../../components/Data.json";
import Map from "../Maps/Map";

import "./Main.scss";
import Home from "../Home";
import Contact from "../Contact/Contact";
import Cities from "../Cities/Cities";
import Signup from "../Signup";
import { SearchBar } from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";

const Main = () => {
	const { pathname } = useLocation();
	return (
		<>
			<div className='mainContainer'>
				{pathname === "/contact" ? null : (
					<SearchBar
						className='main-searchbar'
						placeholder='Entrez votre requête ici...'
						data={DocData}
					/>
				)}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cities' element={<Cities />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>	
			<Footer></Footer>		
			</div>
		</>
	);
};

export default Main;
