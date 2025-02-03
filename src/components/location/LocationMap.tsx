import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationMap.css";

const center = {
    lat: 50.0755,
    lng: 14.4378,
};

const LocationMap: React.FC = () => {
    return (
        <section className="location-section">
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="map-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>Localização da Empresa</Popup>
                </Marker>
            </MapContainer>
        </section>
    );
};

export default LocationMap;
