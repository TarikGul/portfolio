import { connect } from 'react-redux';

import { fetchLocations } from '../../actions/location_actions';
import { fetchGeojson } from '../../actions/adventures_actions';
import Map from './map';

const msp = state => {
    const { errors, location, adventures } = state;
    return {
        errors,
        location,
        adventures
    };
};

const mdtp = dispatch => {
    return {
        fetchGeojson: (key) => dispatch(fetchGeojson(key)),
        fetchLocations: () => dispatch(fetchLocations())
    };
};

export default connect(
    msp,
    mdtp
)(Map);