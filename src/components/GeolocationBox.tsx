import axios from "axios";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import osmtogeojson from "osmtogeojson";
import React, { useState } from "react";

function GeolocationBox() {
    const [coordinates, setCoordinates] = useState("");
    const [geoJSONData, setGeoJSONData] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(
        null
    );

    const handleCoordinatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCoordinates(event.target.value);
    };

    const fetchGeoJSONData = async () => {
        try {
            const response = await axios.get(
                `https://www.openstreetmap.org/api/0.6/map?bbox=${coordinates}`
            );
            const osmData = response.data;

            const geoJSONData = osmtogeojson(osmData) as FeatureCollection<Geometry, GeoJsonProperties>;
            setGeoJSONData(geoJSONData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Get GeoJSON Features</h2>
            <input
                type="text"
                value={coordinates}
                onChange={handleCoordinatesChange}
                placeholder="Enter coordinates (min_lon,min_lat,max_lon,max_lat)"
            />
            <button onClick={fetchGeoJSONData}>Fetch GeoJSON Data</button>
            {geoJSONData && <pre>{JSON.stringify(geoJSONData, null, 2)}</pre>}
        </div>
    );
}

export default GeolocationBox;
