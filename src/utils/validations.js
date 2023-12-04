import * as Yup from "yup";


export const locationValidationSchema = Yup.object({
    min_lon: Yup.string().required("Minimim Longitude is required"),
    min_lat: Yup.string().required("Minimim Latitude is required"),
    max_lon: Yup.string().required("Maximum Longitude is required"),
    max_lat: Yup.string().required("Maximum Latitude is required"),
});