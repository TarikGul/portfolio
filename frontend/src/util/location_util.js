import axios from 'axios';

export const parseLocation = str => {
    const coords = str.location.split(',');

    const lat = parseFloat(coords[0]);
    const long = parseFloat(coords[1]);

    return [lat, long]
};

export const getLocations = () => {
    return axios.get('/api/locations')
};