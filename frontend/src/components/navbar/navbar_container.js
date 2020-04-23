import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from './navbar'

const msp = state => {
    return {

    };
};

const mdtp = dispatch => {
    return {

    };
};

export default withRouter(connect(
    msp,
    mdtp
)(Navbar))