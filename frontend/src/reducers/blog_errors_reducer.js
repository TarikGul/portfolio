import { RECEIVE_BLOG_ERRORS } from '../actions/blog_actions';

const BlogErrorsRedcuer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BLOG_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default BlogErrorsRedcuer;