import { connect } from 'react-redux';

import { createContact } from '../../util/contact_util';
import Contact from './contact';

const msp = state => {
    return {
        
    };
};

const mdtp = dispatch => {
    return {
        createContact: data => dispatch(createContact(data))
    };
};

export default connect(
    msp,
    mdtp
)(Contact);