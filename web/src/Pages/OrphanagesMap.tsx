import React from 'react';

import mapMarkerImg from '../Images/map-marker.svg';
import '../styles/pages/orphanageMap.css';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer } from 'react-leaflet'; 
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita 😁</p>
                </header>

                <footer>
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </footer>
            </aside>

            <Map 
                center={[-3.7581625,-38.5375255]}
                zoom = {15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color = "#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;