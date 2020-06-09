import { connect } from 'react-redux';

import { fetchLocations } from '../../actions/location_actions';
import Map from './map';

const msp = state => {
    const { errors } = state;
    return {
        errors
    };
};

const mdtp = dispatch => {
    return {
        fetchLocations: () => dispatch(fetchLocations())
    };
};

export default connect(
    msp,
    mdtp
)(Map);