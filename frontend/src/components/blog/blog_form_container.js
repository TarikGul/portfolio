import { connect } from 'react-redux';
import { createNewBlog } from '../../actions/blog_actions';
import BlogForm from './blog_form';

const msp = state => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        createBlog: data => dispatch(createNewBlog(data))
    };
};

export default connect(
    msp,
    mdtp
)(BlogForm)