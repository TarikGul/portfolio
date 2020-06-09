import axios from 'axios';

export const getLocations = () => {
    return axios.get('/api/locations')
};