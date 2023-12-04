// app/utils/converters.js

import osmtogeojson from 'osmtogeojson';

export const osmToGeoJSON = (osmData: any) => {
    return osmtogeojson(osmData);
};
