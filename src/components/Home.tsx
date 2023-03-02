import React from "react";
import Map from "../components/Maps/Map";
import "./Home.scss";
import DocData from "./Data.json";
import { MainSearchBar } from "./SearchBar/MainSearchBar";

//console.log('***')

function Home() {
    return (
        <>
            <div className=""></div>
            <div className="mainContainer">
                <Map />
            </div>
        </>
    );
}

export default Home;
