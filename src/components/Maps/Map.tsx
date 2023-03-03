import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { gql, useQuery } from "@apollo/client";
import { getCities } from "../../graphql/city.server";

export interface IData {
    longitude: string;
    latitude: string;
    name: string;
    id: number;
}

export interface IProps {
    data: IData[];
}

function Map() {
    const { loading, error, data } = useQuery(getCities);
    console.log(data, error, loading);
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
                {/* {
                    for(let i; i<)
                } */}
                {data &&
                    data.Cities.map((city: IData) => {
                        
                        return (
                            <Marker
                                key={city.id}
                                position={[
                                    parseFloat(city.latitude),
                                    parseFloat(city.longitude),
                                ]}
                            >
                                <Popup>{city.name}</Popup>
                            </Marker>
                        );
                    })}
            </MapContainer>
        </div>
    );
}

export default Map;