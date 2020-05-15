import { connect } from 'react-redux';

import Blog from './blog';

const msp = state => {
    const { errors, session } = state
    return {
        errors, 
        session
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