import { connect } from 'react-redux';

import { fetchBlogs } from '../../actions/blog_actions';

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
        fetchBlogs: () => dispatch(fetchBlogs()),
    };
};

export default connect(
    msp,
    mdtp
)(Blog);