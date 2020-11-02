import { connect } from 'react-redux';

import { fetchBlogs, fetchTypeBlogs } from '../../actions/blog_actions';

import Blog from './blog';

const msp = state => {
    const { errors, session, blogs } = state
    return {
        errors, 
        session,
        blogs
    };
};

const mdtp = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs()),
        fetchTypeBlogs: (type) => dispatch(fetchTypeBlogs(type)),
    };
};

export default connect(
    msp,
    mdtp
)(Blog);