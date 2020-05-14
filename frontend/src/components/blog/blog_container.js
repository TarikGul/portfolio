import { connect } from 'react-redux';

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