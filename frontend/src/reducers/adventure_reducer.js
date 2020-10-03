import { 
    RECEIVE_GEO_JSON, 
    PRELOADING_GEO_JSON,
    CACHED_GEO_JSON 
} from '../actions/adventures_actions';

const AdventuresReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    let data;
    let preloading;
    let cached;
    switch(action.type) {
        case RECEIVE_GEO_JSON:
            data = action.data.data;
            nextState.geojson = data;
            return nextState;
        case PRELOADING_GEO_JSON:
            preloading = action.boolean;
            nextState.preloading = preloading;
            return nextState;
        case CACHED_GEO_JSON:
            cached = action.boolean;
            nextState.cached = cached;
            return nextState;
        default:
            if(nextState.preloading === undefined) {
                nextState.preloading = false;
            }

            if(nextState.cached === undefined) {
                nextState.cached = false;
            }
            return nextState;
    };
}

export default AdventuresReducer;