import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.scss";

function Map(){

return(
  <div className= "mapDiv">
    <MapContainer className="mapDiv__container" center={[46.083852, 2.508206]} zoom={7} scrollWheelZoom={false} style={{zIndex: 1}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.2961743, 5.3699525]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  
)
}

export default Map;
