import LoadingButton from '@mui/lab/LoadingButton';
import { Form, Formik } from "formik";
import { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import { useState } from "react";
import { Address } from "../interfaces/map";
import { fetchGeoJSONData } from "../utils/mapApi";
import { locationValidationSchema } from "../utils/validations";
import './GeolocationBox.css';
import TextInput from "./TextInput";

function GeolocationBox() {
    const [geoJSONData, setGeoJSONData] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const initialValues: Address = {
        min_lon: '',
        min_lat: '',
        max_lon: '',
        max_lat: '',
    };


    const handleSubmit = async (values: Address): Promise<void> => {
        try {
            const { min_lon, min_lat, max_lon, max_lat } = values;
            //fetch geo json data based on user inout and do the osmToGeoJSON conversion
            const geoJSONData = await fetchGeoJSONData(min_lon, min_lat, max_lon, max_lat);
            setGeoJSONData(geoJSONData);
            setError(null);
        } catch (error) {
            setError('Please check your data and try again!');
            setGeoJSONData(null);
        }
    };

    return (
        <div>
            <h2>Get GeoJSON Features</h2>
            <div className="geolocation-box">
                <div className="form-container">
                    <Formik initialValues={initialValues} validationSchema={locationValidationSchema} onSubmit={handleSubmit}>

                        {({ isSubmitting }) => (
                            <Form>
                                <div className="form">
                                    <TextInput label="Minimim Longitude" name="min_lon" placeholder="-122.4313" />
                                    <TextInput label="Minimim Latitude" name="min_lat" placeholder="37.7749" />
                                    <TextInput label="Maximum Longitude" name="max_lon" placeholder="-122.4088" />
                                    <TextInput label="Maximum Latitude" name="max_lat" placeholder="37.7889" />
                                    <LoadingButton
                                        loadingPosition="start"
                                        variant="contained"
                                        type="submit"
                                        loading={isSubmitting}
                                        color="success"
                                        fullWidth
                                        sx={{ height: 50 }}
                                    >
                                        Fetch GeoJSON Data
                                    </LoadingButton>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    {error && <div className="error-message">Error: {error}</div>}
                </div>
                <div className="json-box">
                    {geoJSONData && <pre>{JSON.stringify(geoJSONData, null, 2)}</pre>}
                </div>
            </div>
        </div>
    );
}

export default GeolocationBox;
