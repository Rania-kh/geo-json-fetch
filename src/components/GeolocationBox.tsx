import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import { useState } from "react";
import { Address } from "../interfaces/map";
import { fetchGeoJSONData } from "../utils/mapApi";
import './GeolocationBox.css';
import { TextInput } from "./TextInput";


function GeolocationBox() {
    const [geoJSONData, setGeoJSONData] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [address, setAddress] = useState<Address>({
        min_lon: '',
        min_lat: '',
        max_lon: '',
        max_lat: ''
    });

    const fetchGeoJSONDataHandler = async (): Promise<void> => {
        try {
            const { min_lon, min_lat, max_lon, max_lat } = address;
            const geoJSONData = await fetchGeoJSONData(min_lon, min_lat, max_lon, max_lat);
            setGeoJSONData(geoJSONData);
            setError(null);
        } catch (error) {
            setError('Please check your data and try again!');
            setGeoJSONData(null);
        }
    };

    const updateAddressField = (field: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setAddress(prevAddress => ({ ...prevAddress, [field]: value }));
    };

    return (
        <div className="geolocation-box">
            <h2>Get GeoJSON Features</h2>
            <form>
                <div className="form-container">
                    <TextInput field="min_lon" onChange={updateAddressField} placeholder="Minimum Longitude" value={address.min_lon} />
                    <TextInput field="min_lat" onChange={updateAddressField} placeholder="Minimum Latitude" value={address.min_lat} />
                    <TextInput field="max_lon" onChange={updateAddressField} placeholder="Maximum Longitude" value={address.max_lon} />
                    <TextInput field="max_lat" onChange={updateAddressField} placeholder="Maximum Latitude" value={address.max_lat} />
                </div>
            </form>
            <button onClick={fetchGeoJSONDataHandler}>Fetch GeoJSON Data</button>
            {geoJSONData && <pre>{JSON.stringify(geoJSONData, null, 2)}</pre>}
            {error && <div className="error-message">Error: {error}</div>}
        </div>
    );
}

export default GeolocationBox;
