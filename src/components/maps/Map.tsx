import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { gql, useQuery } from "@apollo/client";
import { getCities } from "../../graphql/city.server";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToString } from 'react-dom/server';
import pointer from '../../assets/images/pointerTest.png';

export interface IData {
    longitude: string;
    latitude: string;
    name: string;
    id: number;
}

const myIcon = L.icon({
    iconUrl: pointer,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

export interface IProps {
    data: IData[];
}

function Map() {
    const { loading, error, data } = useQuery(getCities);
    console.log(data, error, loading);   
    // btoa = convertir en base64
    // data:image/svg+xml;base64, pour indiquer que la chaîne encodée est une image SVG en base64
    const searchIconUrl = 'data:image/svg+xml;base64,' + btoa
    const searchIcon = L.icon({
        iconUrl: searchIconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
    
    console.log(searchIcon.options.iconUrl);

    return (
        <div className="mapDiv">
            <MapContainer
                className="mapDiv__container"
                center={[46.083852, 2.508206]}
                zoom={6}
                scrollWheelZoom={false}
                style={{ zIndex: 1 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

                {data &&
                    data.Cities.map((city: IData) => {
                        
                        return (
                            <Marker
                                key={city.id}
                                position={[
                                    parseFloat(city.latitude),
                                    parseFloat(city.longitude),
                                ]}
                                icon={myIcon}
                            >
                                {/* <Popup>{city.name}</Popup> */}
                            </Marker>
                        );
                    })}
            </MapContainer>
        </div>
    );
}

export default Map;
