import axios from "axios";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import { osmToGeoJSON } from "./converters";

export async function fetchGeoJSONData(
    minLon: string, minLat: string, maxLon: string, maxLat: string
): Promise<FeatureCollection<Geometry, GeoJsonProperties>> {

    const response = await axios.get(
        `https://www.openstreetmap.org/api/0.6/map?bbox=${minLon},${minLat},${maxLon},${maxLat}`
    );
    const osmData = response.data;

    return osmToGeoJSON(osmData) as FeatureCollection<Geometry, GeoJsonProperties>;
}
