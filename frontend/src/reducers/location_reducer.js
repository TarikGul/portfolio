import { RECEIVE_LOCATIONS } from '../actions/location_actions';

const locationReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            let data = action.data.data;
            nextState['current'] = Object.keys(data)[0]; 
            return nextState;
        default: 
            return nextState;
    };
};

export default locationReducer;
