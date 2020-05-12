import { RECEIVE_BLOGS, RECEIVE_NEW_BLOG } from '../actions/blog_actions';

const BlogsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NEW_BLOG:
            nextState[action.blog.title] = action.blog;
            return nextState;
        case RECEIVE_BLOGS:
            nextState['blogs'] = action.blogs
        default:
            return nextState;
    };
};

export default BlogsReducer;