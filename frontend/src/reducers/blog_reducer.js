import { RECEIVE_BLOGS, RECEIVE_NEW_BLOG } from '../actions/blog_actions';

const BlogsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let replacedState = {};
    let data;
    switch(action.type) {
        case RECEIVE_NEW_BLOG:
            data = action.data.data
            nextState[state.length] = data;
            return nextState;
        case RECEIVE_BLOGS:
            data = action.data.data
            for(let i = 0; i < data.length; i++) {
                replacedState[i] = data[i]
            }
            return replacedState;
        default:
            return nextState;
    };
};

export default BlogsReducer;