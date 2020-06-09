import { RECEIVE_LOCATIONS } from '../actions/location_actions';

const parseLocation = string => {
    const coords = string.split(',');

    const lat = parseInt(coords[0]);
    const long = parseInt(coords[1]);

    return [lat, long]
};

const locationReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    debugger
    switch(action.type) {
        case RECEIVE_LOCATIONS:
            let data = action.data.data;
            nextState['current'] = parseLocation(Object.keys(data)[0]); 
            return nextState;
        default: 
            return nextState;
    };
};

export default locationReducer;
