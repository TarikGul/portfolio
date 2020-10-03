import * as APIUTIL from '../util/adventures_util';

export const RECEIVE_GEO_JSON = 'RECEIVE_GEO_JSON';
export const RECEIVE_GEO_JSON_ERRORS = 'RECEIVE_GEO_JSON_ERRORS';
export const PRELOADING_GEO_JSON = 'PRELOADING_GEO_JSON';
export const CACHED_GEO_JSON = 'CACHED_GEO_JSON';

const receiveGeojson = data => {
    return {
        type: RECEIVE_GEO_JSON,
        data
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_GEO_JSON_ERRORS,
        errors
    };
};

const preloadGeojson = boolean => {
    return {
        type: PRELOADING_GEO_JSON,
        boolean
    };
};

// This means that we called fetchGeojson somewhere and the geojson will be cached
// in global state
const cachedGeojson = boolean => {
    return {
        type: CACHED_GEO_JSON,
        boolean
    }
}

export const fetchGeojson = (key) => dispatch => {
    return APIUTIL.fetchGeojson(key)
        .then(files => dispatch(receiveGeojson(files)))
        .catch(err => dispatch(receiveErrors(err)))
};

export const setPreloadingGeojson = (boolean) => dispatch => {
    return dispatch(preloadGeojson(boolean));
};

export const setCachedGeojson = (boolean) => dispatch => {
    return dispatch(cachedGeojson(boolean));
};