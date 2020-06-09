import { RECEIVE_LOCATIONS } from '../actions/location_actions';

const parseLocation = str => {
    const coords = str.location.split(',');

    const lat = parseFloat(coords[0]);
    const long = parseFloat(coords[1]);

    return [lat, long]
};

const locationReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            let data = action.data.data;
            nextState['current'] = parseLocation(Object.values(data)[0]); 
            return nextState;
        default: 
            return nextState;
    };
};

export default locationReducer;
