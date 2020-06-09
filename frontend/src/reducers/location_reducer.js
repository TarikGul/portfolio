import { RECEIVE_LOCATIONS } from '../actions/location_actions';

const locationReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_LOCATIONS:
            return nextState;
        default: 
            return nextState;
    };
};

export default locationReducer;
