import axios from 'axios';

export const fetchGeojson = () => {
    return axios.get('/api/adventures/index');
}