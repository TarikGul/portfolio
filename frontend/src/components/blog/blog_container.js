import { connect } from 'react-redux';

import Blog from './blog';

const msp = state => {
    const { errors } = state
    return {
        errors
    };
};

const mdtp = dispatch => {
    return {

    };
};

export default connect(
    msp,
    mdtp
)(Blog);