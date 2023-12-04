import * as Yup from "yup";

const regexForLocation = /^[0-9-.]+$/
export const locationValidationSchema = Yup.object({
    min_lon: Yup.string().required("Minimim Longitude is required").matches(regexForLocation, "Must be only digits"),
    min_lat: Yup.string().required("Minimim Latitude is required").matches(regexForLocation, "Must be only digits"),
    max_lon: Yup.string().required("Maximum Longitude is required").matches(regexForLocation, "Must be only digits"),
    max_lat: Yup.string().required("Maximum Latitude is required").matches(regexForLocation, "Must be only digits"),
});